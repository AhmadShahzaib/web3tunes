// @ts-nocheck
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable tailwindcss/no-custom-classname */

import { notification } from 'antd';
import axios from 'axios';
import { Magic } from 'magic-sdk';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';

import { useUser } from '@/contexts/UserContext';
import Web3TunesMarketplaceABI from '@/hardhat/deployments/mumbai/Web3TunesMarketplace.json';
import Web3TunesNFTABI from '@/hardhat/deployments/mumbai/Web3TunesNFT.json';
import { formattedNetwork } from '@/libs/magic';
import { getWeb3 } from '@/libs/web3';
import type { NotificationType } from '@/utils/lib';
import { getIPFSUrl } from '@/utils/lib';

import { useWeb3 } from '../../contexts/Web3Context';

export interface Data {
  artistEmail: string;
  price: number;
  quantity: number;
  iban: string;
  adminNotes: string;
  address: string;
}

export interface Artwork {
  mimeType: string;
  uri: string;
}

export interface Visualizer {
  mimeType: string;
  uri: string;
}

export interface Artwork2 {
  mimeType: string;
  uri: string;
}

export interface Project {
  artwork: Artwork2;
  title: string;
  type: string;
  originalReleaseDate: string;
  recordLabel: string;
  publisher: string;
  description: string;
  upc: string;
}

export interface Attributes {
  key: string;
  genre: string;
  bpm: number;
  artist: string;
  project: string;
  recordLabel: string;
  license: string;
}

export interface Lyrics {
  text: string;
}

export interface Content {
  version: string;
  mimeType: string;
  artwork: Artwork;
  visualizer: Visualizer;
  project: Project;
  key: string;
  attributes: Attributes;
  name: string;
  title: string;
  description: string;
  trackNumber: number;
  genre: string;
  bpm: number;
  external_url: string;
  duration: number;
  originalReleaseDate: string;
  recordLabel: string;
  publisher: string;
  locationCreated: string;
  lyrics: Lyrics;
  artist: string;
  license: string;
  isrc: string;
  animation_url: string;
  losslessAudio: string;
  image: string;
}

export interface Mint {
  ipnft: string;
  url: string;
  minted: boolean;
  nftId: number;
}

export interface INFT {
  ipnft: string;
  url: string;
  data: Data;
  content: Content;
  mint: Mint;
  id: number;
}

export default function NFTDetail() {
  const router = useRouter();
  const [nft, setNft] = useState<INFT | null>(null);
  const { id } = router.query;

  const { user, setUser } = useUser();
  const { setWeb3 } = useWeb3();

  const [web3tunesNft, setWeb3tunesNft] = useState<any | null>(null);
  const [web3TunesMarketplace, setWeb3TunesMarketplace] = useState<any | null>(
    null
  );

  useEffect(() => {
    const doAsync = async () => {
      const web3 = await getWeb3();
      // const magic = new Magic('pk_live_A42DBA0F3A5C362C' as string, {
      //   network: formattedNetwork(),
      // });
      // const provider = await (magic.wallet as any).getProvider();
      const Web3TunesNFTInstance = new web3.eth.Contract(
        Web3TunesNFTABI.abi,
        process.env.NEXT_PUBLIC_WEB3TUNES_NFT_ADDRESS
      );
      setWeb3tunesNft(Web3TunesNFTInstance);

      const Web3TunesMarketplaceInstance = new web3.eth.Contract(
        Web3TunesMarketplaceABI.abi,
        process.env.NEXT_PUBLIC_WEB3TUNES_MARKETPLACE_ADDRESS
      );
      setWeb3TunesMarketplace(Web3TunesMarketplaceInstance);
    };
    if (!web3tunesNft || !web3TunesMarketplace) {
      doAsync();
    }
  }, []);
 
    const [audRate, setAudRate] = useState(null);
  
    useEffect(() => {
      const fetchExchangeRate = async () => {
        try {
          const response = await axios.get(
            'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=aud'
          );
          const data = response.data;
          const ethAudRate = data.ethereum.aud;
          setAudRate(ethAudRate);
        } catch (error) {
          console.error('Error fetching exchange rate:', error);
        }
      };
  
      fetchExchangeRate();
    }, []);
  const [connected, setConnected] = useState(false);
  // const { disconnect: doDisconnect } = useDisconnect();
  const [buying, setBuying] = useState(false);

  const [amount, setAmount] = useState(1);

  // const ethInAud = 2199.89;

  const [api, contextHolder] = notification.useNotification();
  const notify = (
    type: NotificationType,
    message = 'Notification Title',
    description = ''
  ) => {
    api[type]({
      message,
      description,
    });
  };

  // const disconnect = () => {
  //   doDisconnect();
  //   setConnected(false);
  // };
  useEffect(() => {
    if (user) {
      setConnected(true);
    }
  }, [user]);

  useEffect(() => {
    if (connected) {
      const doAsync = async () => {
        if (!web3tunesNft) return;
        console.log(web3tunesNft);

        console.log('NFT Contract is deployed at ', web3tunesNft._address);
        const owner = await web3tunesNft.methods.owner().call();
        console.log('Owner: ', owner, user);
        if (String(owner).toLowerCase() !== String(user).toLowerCase()) {
          window.location.href = '/';
        }

        // setAccountBalance();
      };
      doAsync();
    }
  }, [web3tunesNft, connected]);

  const fetchNFT = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_HOST || ''}/nfts/${id}`
    );
    setNft(res.data);
  };

  const updateNFT = async (n: any) => {
    await axios.patch(
      `${process.env.NEXT_PUBLIC_SERVER_HOST || ''}/nfts/${id}`,
      n
    );
    await fetchNFT();
  };

  useEffect(() => {
    if (!nft && id) {
      fetchNFT();
    }
  }, [router]);

  const connect = async () => {
    try {
      const magic = new Magic('pk_live_A42DBA0F3A5C362C' as string, {
        network: formattedNetwork(),
      });
      const accounts = await magic.wallet.connectWithUI();
      if (accounts[0]) {
        console.log('Logged in user:', accounts[0]);
        localStorage.setItem('user', accounts[0]);

        // Once user is logged in, re-initialize web3 instance to use the new provider (if connected with third party wallet)
        const web3 = await getWeb3();
        setWeb3(web3);
        setUser(accounts[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Muy nft
   * @returns
   */
  const buyNft = async () => {
    if (!web3tunesNft) return;
    if (!web3TunesMarketplace) return;
    console.log(
      'NFT Marketplace Contract is deployed at ',
      web3TunesMarketplace._address
    );

    if (!user) {
      await connect();
    }
    const web3 = await getWeb3();
    // Get user's Ethereum public address
    const fromAddress = (await web3.eth.getAccounts())[0];

    if (nft) {
      if (nft?.data.quantity > 1 && (!amount || amount > nft.data.quantity)) {
        alert('Out of stock or invalid quantity.');
        return;
      }

      setBuying(true);
      console.log(String(nft.data.price));

      // buying...
     
      let valueInWei = Number(
        web3.utils.toWei(String(nft.data.price)) * amount +
          ((web3.utils.toWei(String(nft.data.price)) * 100) / 1000) *
            amount +
          (web3.utils.toWei(String(nft.data.price)) * 25) / 1000
      )
      debugger
// let stringValue= valueInWei.toString()
let stringValue= "12510000000"

      const tx = await web3TunesMarketplace.methods.buyNFT(id, amount).send({
        from: fromAddress,
        // web3.utils.toWei(
        value: "1251000000000000000",
          
        
        // ),
      });
      // eslint-disable-next-line no-console
      // .catch((e: EthersError) => {
      //   console.info(getParsedEthersError(e as EthersError));
      // });
      // await tx.wait();
      console.log('buyNFT tx', tx);
      debugger

      const n = {
        ...nft,
        data: { ...nft.data, quantity: nft.data.quantity - amount },
      };
      await updateNFT(n);
      // let storedNfts = nfts;
      // storedNfts = storedNfts.map((n) =>
      //   n.ipnft === ipnft ? { ...nft, mint: { ...nft.mint, minted: true } } : n
      // );
      // setNfts(storedNfts);
      // window.localStorage.setItem('nfts', JSON.stringify(storedNfts));
      notify(
        'success',
        '$W3TN purchased!',
        'Transaction has been done successfully.'
      );
      setBuying(false);
    }

    // const tx = await web3tunesNft.instance
    //   .setApprovalForAll(web3tunesMarketplace.instance.address, true)
    //   // eslint-disable-next-line no-console
    //   .catch((e) => console.info(getParsedEthersError(e as EthersError)));
    // console.log('isApprovedForAll tx', tx);
    // await tx.wait();
  };

  return (
    <section className="product-details section-bg-separation-2 pt-120 pb-90">
      {contextHolder}
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 mb-6">
            <div className="explore-style-one">
              <div className="thumb">
                <img
                  id="largeImage"
                  className="zoom-img"
                  src={getIPFSUrl(String(nft?.content.image))}
                  width={711}
                  alt="prodcut"
                />
                {/* End .count-down */}
                {/* <button className="reaction-btn">
                  <i className="ri-heart-fill" />
                  <span>0</span>
                </button> */}
                {/* <button
                  className="reaction-btn total-watch left"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Total Watch"
                >
                  <i className="ri-eye-line" />
                  <span>0</span>
                </button> */}
                {/* End .reaction-count */}
              </div>
              <span style={{ marginTop: '25px', display: 'block' }}>
                Music:
              </span>
              <div
                className="thumb mt-2"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
                <img
                  src={getIPFSUrl(String(nft?.content?.artwork?.uri))}
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '100px',
                  }}
                  alt="prodcut"
                />
                {/* <div className="">sdf</div> */}
                {nft && (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                    }}
                  >
                    <ReactAudioPlayer
                      style={{ marginTop: '10px' }}
                      src={getIPFSUrl(nft.content.animation_url) || ''}
                      autoPlay={false}
                      controls
                    />
                    <ReactAudioPlayer
                      style={{ marginTop: '10px' }}
                      src={getIPFSUrl(nft.content?.visualizer?.uri) || ''}
                      autoPlay={false}
                      controls
                    />
                  </div>
                )}
              </div>
              <span style={{ marginTop: '25px', display: 'block' }}>
                Project:
              </span>
              <div className="thumb mt-2">
                <img
                  id="largeImage"
                  className="zoom-img"
                  src={getIPFSUrl(String(nft?.content.project.artwork.uri))}
                  width={711}
                  alt="prodcut"
                />
                {/* <div className="">sdf</div> */}
              </div>
              {/* End .thumb */}
            </div>
            {/* End .explore-style-one */}
          </div>
          {/* End col */}
          <div className="col-xxl-6 mb-6">
            <div className="details-content">
              {/* End .avatar-info-wrapper */}
              <h2 className="main_title">{nft?.content.name}</h2>
              <div className="row">
                <div className="col-lg-10 col-md-10">
                  <div className="avatar-info-wrapper d-flex-between ">
                    <div className="d-flex-center avatar-info mb-4">
                      <div className="thumb-wrapper">
                        <a href="#" className="thumb">
                          <img
                            src="/assets/images/authors/avatar/1.png"
                            alt="top sellter"
                          />
                        </a>
                      </div>
                      {/* End .thumb-wrapper */}
                      <div className="content">
                        <span className="owner">Artist</span>
                        <h4 className="title  pb-1">
                          <a href="#">{nft?.content.artist}</a>
                        </h4>
                      </div>
                      {/* End .content */}
                    </div>
                    {/* End .d-flex-cente */}
                    <div className="d-flex-center avatar-info mb-4">
                      <div className="thumb-wrapper">
                        <a href="#" className="thumb">
                          <img
                            src="/assets/images/authors/avatar/1.png"
                            alt="top sellter"
                          />
                        </a>
                      </div>
                      {/* End .thumb-wrapper */}
                      <div className="content">
                        <span className="owner">Publisher</span>
                        <h4 className="title  pb-1">
                          <a href="#">{nft?.content.publisher}</a>
                        </h4>
                      </div>
                      {/* End .content */}
                    </div>
                    {/* End .d-flex-cente */}
                  </div>
                </div>
              </div>
              {/* End .row */}
              <div className="row">
                <div className="col-md-6">
                  <div className="biding-block">
                    <span>Price</span>
                    <h3>{Number(nft?.data.price).toFixed(4)} ETH</h3>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="biding-block">
                    <span> Hold Type</span>
                    <h3>ON SALE</h3>
                    {/* End .count-down */}
                  </div>
                </div>
              </div>
              {/* End .row */}
              <h4 className="mb-1">Description</h4>
              <p className="subtitle">{nft?.content.description}</p>
              <div className="d-flex-between mb-5">
                <ul className="nav custom-tabs">
                  <li>
                    <a className=" active" data-bs-toggle="tab" href="#track">
                      Track
                    </a>
                  </li>
                  <li>
                    <a data-bs-toggle="tab" href="#project">
                      Project
                    </a>
                  </li>
                  <li>
                    <a data-bs-toggle="tab" href="#lyrics">
                      Lyrics
                    </a>
                  </li>
                  <li>
                    <a data-bs-toggle="tab" href="#license">
                      License
                    </a>
                  </li>
                </ul>
                {/* <div className="more-dropdown details-dropdown">
                  <i className="ri-more-fill" data-bs-toggle="dropdown" />
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        New bid
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Refresh Metadata
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Share
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Report
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
              {/* Tab panes */}
              <div className="tab-content custom-tab-content">
                <div className="tab-pane fade show active container" id="track">
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                    }}
                  >
                    <p>
                      Track #: <strong>{nft?.content.trackNumber}</strong>
                    </p>
                    <p>
                      Genre: <strong>{nft?.content.genre}</strong>
                    </p>
                    <p>
                      BPM (Beats per minute):{' '}
                      <strong>{nft?.content.bpm}</strong>
                    </p>
                    <p>
                      External URL: <strong>{nft?.content.external_url}</strong>
                    </p>
                    <p>
                      Duration: <strong>{nft?.content.duration}s</strong>
                    </p>
                    <p>
                      Release date:{' '}
                      <strong>{nft?.content.originalReleaseDate}</strong>
                    </p>
                    <p>
                      Record label: <strong>{nft?.content.recordLabel}</strong>
                    </p>
                    <p>
                      Publisher: <strong>{nft?.content.publisher}</strong>
                    </p>
                    <p>
                      Location: <strong>{nft?.content.locationCreated}</strong>
                    </p>
                  </div>
                </div>
                <div className="tab-pane fade container" id="project">
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                    }}
                  >
                    <p>
                      Title: <strong>{nft?.content.project.title}</strong>
                    </p>
                    <p>
                      Project type: <strong>{nft?.content.project.type}</strong>
                    </p>
                    <p>
                      Release date:{' '}
                      <strong>
                        {nft?.content.project.originalReleaseDate}
                      </strong>
                    </p>
                    <p>
                      Record label:{' '}
                      <strong>{nft?.content.project.recordLabel}</strong>
                    </p>
                    <p>
                      Publisher:{' '}
                      <strong>{nft?.content.project.publisher}</strong>
                    </p>
                    <p>
                      Description:{' '}
                      <strong>{nft?.content.project.description}</strong>
                    </p>
                  </div>
                </div>
                <div className="tab-pane fade container" id="lyrics">
                  {nft?.content.lyrics.text}
                </div>
                <div className="tab-pane fade container" id="license">
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                    }}
                  >
                    <p>
                      License #: <strong>{nft?.content.license}</strong>
                    </p>
                    <p>
                      ISRC: <strong>{nft?.content.isrc}</strong>
                    </p>
                    <p>
                      UPC: <strong>{nft?.content.version}</strong>
                    </p>
                  </div>
                </div>
                {/* End bid details */}
              </div>
              {nft?.data.quantity !== undefined && nft?.data.quantity > 0 && (
                <>
                  {nft?.data.quantity !== undefined &&
                    nft?.data.quantity > 1 && (
                      <div className="col-md-12 mt-4">
                        <div className="field-box">
                          <label htmlFor="price" className="form-label">
                            Quantity Avilable : <strong> {nft?.data.quantity}</strong>
                          </label>
                          <input
                            id="price"
                            type="number"
                            min={1}
                            max={nft?.data.quantity}
                            placeholder="e. g. 5"
                            onChange={({ target }) =>
                              setAmount(Number(target.value))
                            }
                          />
                        </div>
                      </div>
                    )}
                  <span style={{ marginTop: '5px', display: 'block' }}>
                    {' '}
                    Service fee:{' '}
                    <strong>
                      0.25% {String((Number(nft?.data.price)*amount * 25) / 1000)} ETH{' '} {String((Number(nft?.data.price)*amount * (audRate? audRate: 230)) )} AUD{' '}
                      {/* {` x ${amount}`} */}
                    </strong>{' '}
                  </span>{' '}
                  <a
                    // data-bs-toggle="modal"
                    // data-bs-target="#placeBit"
                    href="#"
                    onClick={() => buyNft()}
                    className="btn btn-medium btn-gradient w-100 justify-content-center mt-5"
                  >
                    <span>
                      <i className="ri-shopping-bag-line" />
                      {buying
                        ? 'Wait...'
                        : `${user ? 'Buy' : 'Connect to Buy'}`}
                    </span>
                  </a>
                </>
              )}
            </div>
          </div>
          {/* End col */}
        </div>
        {/* ENd .row */}
      </div>
      {/* End .container */}
    </section>
  );
}

// @ts-nocheck
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
/* eslint-disable import/order */
/* eslint-disable no-console */
/* eslint-disable tailwindcss/no-custom-classname */
import { notification, Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { useRouter } from 'next/router';
import { useUser } from '@/contexts/UserContext';
import Web3TunesMarketplaceABI from '@/hardhat/deployments/mumbai/Web3TunesMarketplace.json';
import Web3TunesNFTABI from '@/hardhat/deployments/mumbai/Web3TunesNFT.json';
import { getWeb3 } from '@/libs/web3';
// import IpfsHttpClientLite from 'ipfs-http-client-lite';
import type { NotificationType } from '@/utils/lib';
import { getIPFSUrl } from '@/utils/lib';

export default function Mint() {
  const { user } = useUser();
  const router = useRouter();
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

  const [connected, setConnected] = useState(false);
  // const { disconnect: doDisconnect } = useDisconnect();
  const [minting, setMinting] = useState<string | null>(null);

  const [nfts, setNfts] = useState<any[]>([]);

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
    let token =localStorage.getItem('token');
    // if (token) {
      setConnected(true);
    // }
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

  const fetchNFTs = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_HOST || ''}/nfts`
      );
      res.data.forEach((n: any) => {n.id = n._id;
      n.mint.nftId = n._id});
    
      setNfts(res.data);
  };
  const rerouteToEdit =()=>{
    debugger
    router.push('/nft/'+nft.id)
  }
  const updateNFT = async (nft: any) => {
    await axios.patch(
      `${process.env.NEXT_PUBLIC_SERVER_HOST || ''}/nfts/${nft.id}`,
      nft
    );
    await fetchNFTs();
  };

  useEffect(() => {
    if (!nfts.length) {
      fetchNFTs();
    }
  }, []);

  /**
   * Mint nfts
   * @returns
   */
  const mintNft = async (ipnft: string) => {
    if (!web3tunesNft) return;
    if (!web3TunesMarketplace) return;
    console.log(
      'NFT Marketplace Contract is deployed at ',
      web3TunesMarketplace._address
    );
    const web3 = await getWeb3();
    // Get user's Ethereum public address
    const fromAddress = (await web3.eth.getAccounts())[0];

    let nft = nfts.find((n) => {
     
      n.ipnft === ipnft
    });
    if (nft) {
      setMinting(ipnft);
      console.log(String(nft.data.price));

      // Minting...

      let tx = await web3tunesNft.methods
        .mint(String(user), nfts.indexOf(nft), nft.data?.quantity || 1)
        .send({ from: fromAddress });
      // eslint-disable-next-line no-console
      // .catch((e: EthersError) => {
      //   console.info(getParsedEthersError(e as EthersError));
      // });
      // await tx.wait();
      console.log('mint tx', tx);

      // Setting token URi...
      tx = await web3tunesNft.methods
        .setTokenUri(nfts.indexOf(nft), nft.url)
        .send({ from: fromAddress });
      // eslint-disable-next-line no-console
      // .catch((e: EthersError) => {
      //   console.info(getParsedEthersError(e as EthersError));
      // });
      // await tx.wait();
      // console.log('setTokenUri tx', tx);
      console.log('sdsdf:', web3.utils.toWei(String(nft.data.price)));

      // Listing nft...
      tx = await web3TunesMarketplace.methods
        .listNft(
          nfts.indexOf(nft),
          nft.data?.quantity,
          web3.utils.toWei(String(nft.data.price))
        )
        .send({ from: fromAddress });
      // eslint-disable-next-line no-console
      // .catch((e: EthersError) => {
      //   console.info(getParsedEthersError(e as EthersError));
      // });
      // await tx.wait();
      console.log('listNft tx', tx);

      nft = { ...nft, mint: { ...nft.mint, minted: true } };
      await updateNFT(nft);
      // let storedNfts = nfts;
      // storedNfts = storedNfts.map((n) =>
      //   n.ipnft === ipnft ? { ...nft, mint: { ...nft.mint, minted: true } } : n
      // );
      // setNfts(storedNfts);
      // window.localStorage.setItem('nfts', JSON.stringify(storedNfts));
      notify('success', '$W3TN minted!', 'NFT has been minted successfully.');
      setMinting(null);
    }

    // const tx = await web3tunesNft.instance
    //   .setApprovalForAll(web3tunesMarketplace.instance.address, true)
    //   // eslint-disable-next-line no-console
    //   .catch((e) => console.info(getParsedEthersError(e as EthersError)));
    // console.log('isApprovedForAll tx', tx);
    // await tx.wait();
  };

  // console.log(address);

  if (!connected) {
    return <>Please conenct your wallet</>;
  }

  const columns = [
    {
      title: 'Music',
      dataIndex: 'content',
      key: 'music',
      render: (content: any) => (
        <div
          className=""
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexFlow: 'column',
          }}
        >
          <img
            src={getIPFSUrl(content?.image) || 'unable to load image '}
            alt="Alt"
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '5px',
              marginBottom: '10px',
            }}
          />
          <ReactAudioPlayer
            src={getIPFSUrl(content?.animation_url) || ''}
            autoPlay={false}
            controls
          />
        </div>
      ),
    },
    {
      title: 'Address',
      dataIndex: 'data',
      key: 'address',
      render: (data: any) =>
        `${String(data?.address).slice(0, 5)}...${String(data?.address).slice(
          -5
        )}` || '',
    },
    {
      title: 'Title',
      dataIndex: 'content',
      key: 'title',
      render: (content: any) => content.title || '',
    },
    {
      title: 'Quantity',
      dataIndex: 'data',
      key: 'quantity',
      render: (data: any) => data.quantity || '',
    },
    {
      title: 'Actions',
      dataIndex: 'mint',
      key: 'actions',
      render: (mint: any) => (
        <>
          {!mint?.minted && (
            <button
              className="btn btn-gradient btn-small mr-2"
              onClick={() => mintNft(mint.ipnft)}
              disabled={minting !== null}
            >
              <span>{minting ? 'Wait...' : 'Mint'}</span>
            </button>
          )}
           {!mint?.minted && (
            <button
            className="btn btn-gradient btn-small mr-2"
            onClick={() => 
              // rerouteToEdit()}
            router.push('/nft/'+mint?.nftId)}
            disabled={minting !== null}
          >
            <span>Edit</span>
          </button>
          )}
          {mint?.minted && [
            <a
              key={`opensea-btn-${mint?.nftId}`}
              href={`https://testnets.opensea.io/assets/mumbai/${web3tunesNft?._address}/${mint.nftId}`}
              target="_blank"
              className="btn btn-outline btn-small mr-2"
              rel="noreferrer"
            >
              <span> See on OpenSea</span>
            </a>,
            <a
              key={`library-btn-${mint?.nftId}`}
              href={`/library`}
              className="btn btn-outline btn-small mr-2"
              rel="noreferrer"
            >
              <span> View</span>
            </a>,
          ]}
        </>
      ),
    },
  ];

  return (
    <section className="pt-120 pb-90">
      {contextHolder}
      <div className="container">
        {/* <form action="#"> */}
        <div className="create-item-wrapper">
          <div className="row">
            <div className="col-lg-12">
              <h5 className="title mb-1">Mint Requests</h5>
              <Table dataSource={nfts} columns={columns} className="mt-5" />
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .create-item-wrapper */}

        {/* ENd .row */}
        {/* </form> */}
      </div>
    </section>
  );
}

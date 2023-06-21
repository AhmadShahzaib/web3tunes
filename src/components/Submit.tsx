/* eslint-disable no-console */
/* eslint-disable tailwindcss/no-custom-classname */
import type { StepProps } from 'antd';
import { notification, Result, Steps } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BiCreditCard, BiMusic } from 'react-icons/bi';
import { FaEthereum } from 'react-icons/fa';
import { MdDone } from 'react-icons/md';
import uuid from 'react-uuid';
import styled from 'styled-components';
import { useWeb3 } from '../contexts/Web3Context';

import { useUser } from '@/contexts/UserContext';
// import IpfsHttpClientLite from 'ipfs-http-client-lite';
import { useMusicMetadata } from '@/hooks/useMusicMetadata';
import type { NotificationType } from '@/utils/lib';
import { getIPFSUrl } from '@/utils/lib';

import Uploader, { FileType } from './Common/Uploader';
import { formattedNetwork } from '@/libs/magic';
import { getWeb3 } from '@/libs/web3';
import { Magic } from 'magic-sdk';
// import { connected } from 'process';

const FormSteps = styled(Steps)`
  & .ant-steps-item-process .ant-steps-item-icon {
    background: linear-gradient(97.3deg, #ff512f 0%, #dd2476 100%);
    border-color: #dd2476;
  }
  & .ant-steps-item-title {
    font-family: 'Chakra Petch', sans-serif;
    & .ant-steps-item-subtitle {
      font-family: 'Inter', sans-serif;
    }
  }
`;

interface ExtendedStepProps extends StepProps {
  content?: JSX.Element;
}

export default function Submit() {
  const [connected, setConnected] = useState(false);
  // const  userprop  = useUser();
  const { user, setUser } = useUser();

  // const { disconnect: doDisconnect } = useDisconnect();

  const [current, setCurrent] = useState(0);
  const { metadata, setMetadata, createIpfsMetadata } = useMusicMetadata();
  const [artistEmail, setArtistEmail] = useState('');
  const [iban, setIban] = useState('');
  const [price, setPrice] = useState(0.0);
  const [quantity, setQuantity] = useState(0);
  const [adminNotes, setAdminNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [multiple, setMultiple] = useState(false);
  const { setWeb3 } = useWeb3();

  const [web3tunesNft, setWeb3tunesNft] = useState<any | null>(null);
  const [web3TunesMarketplace, setWeb3TunesMarketplace] = useState<any | null>(
    null
  );
  const ethInAud = 2199.89;

  const [api, contextHolder] = notification.useNotification();

  // const disconnect = () => {
  //   doDisconnect();
  //   setConnected(false);
  // };
  useEffect(() => {
    if (user) {
      setConnected(true);
    }
  }, [user]);

  const getData = async () => {
    const res = await axios(
      String(
        'https://ipfs.io/ipfs/bafyreicelqa3lho3qhg3xfv6kzq2dschlkadgnok2hohhqgqfx7wykhpdy/metadata.json'
      )
    );
    console.log(res);
  };

  useEffect(() => {
    getData();
  }, []);

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

  const steps: ExtendedStepProps[] = [
    {
      title: 'Music Info',
      icon: <BiMusic />,
      subTitle: 'Enter Metadata',
      content: (
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="field-box">
              <label htmlFor="name" className="form-label">
                Music Title
              </label>
              <input
                id="name"
                type="text"
                placeholder="e. g. `Jungle Game Background`"
                onChange={(e) => {
                  const nameMetadata = {
                    name: e.target.value,
                    title: e.target.value,
                  };
                  // Set key
                  const id = uuid();
                  const keyMetadata = {
                    key: id,
                    attributes: { ...metadata.attributes, key: id },
                  };
                  setMetadata({ ...metadata, ...keyMetadata, ...nameMetadata });
                }}
              />
            </div>
          </div>
          <div className="col-md-12 mb-4">
            <div className="field-box">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                id="description"
                rows={3}
                placeholder="e. g. “This music is...”"
                defaultValue={''}
                onChange={(e) =>
                  setMetadata({ ...metadata, description: e.target.value })
                }
              />
            </div>
          </div>
          <div
            className="row"
            style={{
              paddingRight: '0px',
              paddingLeft: '0px',
              marginLeft: '0px',
            }}
          >
            <div className="col-md-4 mb-4">
              <div className="field-box">
                <label htmlFor="trackNo" className="form-label">
                  Track #
                </label>
                <input
                  id="trackNo"
                  type="number"
                  placeholder="e. g. 012"
                  onChange={(e) =>
                    setMetadata({
                      ...metadata,
                      trackNumber: parseInt(e.target.value, 10),
                    })
                  }
                />
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="field-box">
                <label htmlFor="genre" className="form-label">
                  Genre
                </label>
                <input
                  id="genre"
                  type="text"
                  placeholder="e. g. Rock"
                  onChange={(e) => {
                    const genreMetadata = {
                      genre: e.target.value,
                      attributes: {
                        ...metadata.attributes,
                        genre: e.target.value,
                      },
                    };
                    setMetadata({ ...metadata, ...genreMetadata });
                  }}
                />
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="field-box">
                <label htmlFor="bpm" className="form-label">
                  BPM (Beats per minute)
                </label>
                <input
                  id="bpm"
                  type="number"
                  placeholder="e. g. 17"
                  onChange={(e) => {
                    const bpm = parseInt(e.target.value, 10);
                    const bpmMetadata = {
                      bpm,
                      attributes: { ...metadata.attributes, bpm },
                    };
                    setMetadata({ ...metadata, ...bpmMetadata });
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{
              paddingRight: '0px',
              paddingLeft: '0px',
              marginLeft: '0px',
            }}
          >
            <div className="col-md-4 mb-4">
              <div className="field-box">
                <label htmlFor="externalURl" className="form-label">
                  External URL
                </label>
                <input
                  id="externalURl"
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    setMetadata({ ...metadata, external_url: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="field-box">
                <label htmlFor="duration" className="form-label">
                  Duration
                </label>
                <input
                  id="duration"
                  type="number"
                  placeholder="e. g. `15 sec`"
                  onChange={(e) =>
                    setMetadata({
                      ...metadata,
                      duration: parseInt(e.target.value, 10),
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{
              paddingRight: '0px',
              paddingLeft: '0px',
              marginLeft: '0px',
            }}
          >
            <div className="col-md-4 mb-4">
              <div className="field-box">
                <label htmlFor="releaseDate" className="form-label">
                  Release date
                </label>
                <input
                  id="releaseDate"
                  type="text"
                  placeholder="e. g. April 20, 2022"
                  onChange={(e) =>
                    setMetadata({
                      ...metadata,
                      originalReleaseDate: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="field-box">
                <label htmlFor="recordLabel" className="form-label">
                  Record label (track)
                </label>
                <input
                  id="recordLabel"
                  type="text"
                  placeholder=""
                  onChange={(e) =>
                    setMetadata({
                      ...metadata,
                      recordLabel: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="field-box">
                <label htmlFor="trackPublisher" className="form-label">
                  Publisher (track)
                </label>
                <input
                  id="trackPublisher"
                  type="text"
                  placeholder=""
                  onChange={(e) =>
                    setMetadata({
                      ...metadata,
                      publisher: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-md-12 mb-4">
            <div className="field-box">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                id="location"
                type="text"
                placeholder="e. g. `New York City`"
                onChange={(e) =>
                  setMetadata({ ...metadata, locationCreated: e.target.value })
                }
              />
            </div>
          </div>
          <div className="col-md-12 mb-4">
            <div className="field-box">
              <label htmlFor="lyrics" className="form-label">
                Lyrics
              </label>
              <textarea
                id="lyrics"
                rows={3}
                placeholder=""
                defaultValue={''}
                onChange={(e) =>
                  setMetadata({
                    ...metadata,
                    lyrics: { text: e.target.value },
                  })
                }
              />
            </div>
          </div>
          <h6 className="title mb-4 mt-5">Who is the Artist?</h6>
          <div
            className="row"
            style={{
              paddingRight: '0px',
              paddingLeft: '0px',
              marginLeft: '0px',
            }}
          >
            <div className="col-md-6 mb-4">
              <div className="field-box">
                <label htmlFor="artistName" className="form-label">
                  Artist Name
                </label>
                <input
                  id="artistName"
                  type="text"
                  placeholder="e. g. `John Doe`"
                  onChange={(e) => {
                    const artistMetadata = {
                      artist: e.target.value,
                      attributes: {
                        ...metadata.attributes,
                        artist: e.target.value,
                      },
                    };
                    setMetadata({ ...metadata, ...artistMetadata });
                  }}
                />
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="field-box">
                <label htmlFor="artistEmail" className="form-label">
                  Artist Email
                </label>
                <input
                  id="artistEmail"
                  type="text"
                  placeholder="e. g. `musician@xstudio.com`"
                  onChange={({ target }) => setArtistEmail(target.value)}
                />
              </div>
            </div>
          </div>
          <h6 className="title mb-4 mt-5">Is this part of any project?</h6>
          <div
            className="row"
            style={{
              paddingRight: '0px',
              paddingLeft: '0px',
              marginLeft: '0px',
            }}
          >
            <div className="col-md-12 mb-4">
              <div className="field-box">
                <label htmlFor="projectTitle" className="form-label">
                  Project Title
                </label>
                <input
                  id="projectTitle"
                  type="text"
                  placeholder="e. g. `Exclusive Project`"
                  onChange={(e) => {
                    const projectTitleMetadata = {
                      project: { ...metadata.project, title: e.target.value },
                      attributes: {
                        ...metadata.attributes,
                        project: e.target.value,
                      },
                    };
                    setMetadata({
                      ...metadata,
                      ...projectTitleMetadata,
                    });
                  }}
                />
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="field-box">
                <label htmlFor="projectType" className="form-label">
                  Project Type
                </label>
                <select
                  id="projectType"
                  defaultValue={''}
                  onChange={(e) =>
                    setMetadata({
                      ...metadata,
                      project: { ...metadata.project, type: e.target.value },
                    })
                  }
                >
                  <option value={'Single'}>Single</option>
                  <option value={'EP'}>EP</option>
                  <option value={'Album'}>Album</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="field-box">
                <label htmlFor="projectReleaseDate" className="form-label">
                  Project Release Date
                </label>
                <input
                  id="projectReleaseDate"
                  type="text"
                  placeholder="e. g. `April 20, 2022`"
                  onChange={(e) =>
                    setMetadata({
                      ...metadata,
                      project: {
                        ...metadata.project,
                        originalReleaseDate: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="field-box">
                <label htmlFor="projectRecordLabel" className="form-label">
                  Project Record Label
                </label>
                <input
                  id="projectRecordLabel"
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    const projectLabelMetadata = {
                      project: {
                        ...metadata.project,
                        recordLabel: e.target.value,
                      },
                      attributes: {
                        ...metadata.attributes,
                        recordLabel: e.target.value,
                      },
                    };
                    setMetadata({
                      ...metadata,
                      ...projectLabelMetadata,
                    });
                  }}
                />
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="field-box">
                <label htmlFor="projectPublisher" className="form-label">
                  Project Publisher
                </label>
                <input
                  id="projectPublisher"
                  type="text"
                  placeholder="e. g. `xStudios`"
                  onChange={(e) =>
                    setMetadata({
                      ...metadata,
                      project: {
                        ...metadata.project,
                        publisher: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-md-12 mb-4">
            <div className="field-box">
              <label htmlFor="projectDescription" className="form-label">
                Project Description
              </label>
              <textarea
                id="projectDescription"
                rows={3}
                placeholder="e. g. “This project is...”"
                defaultValue={''}
                onChange={(e) =>
                  setMetadata({
                    ...metadata,
                    project: {
                      ...metadata.project,
                      description: e.target.value,
                    },
                  })
                }
              />
            </div>
          </div>
          <h6 className="title mb-4 mt-5">License Details</h6>
          <div
            className="row"
            style={{
              paddingRight: '0px',
              paddingLeft: '0px',
              marginLeft: '0px',
            }}
          >
            <div className="col-md-4 mb-4">
              <div className="field-box">
                <label htmlFor="license" className="form-label">
                  License
                </label>
                <input
                  id="license"
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    const licenseMetadata = {
                      license: e.target.value,
                      attributes: {
                        ...metadata.attributes,
                        license: e.target.value,
                      },
                    };
                    setMetadata({ ...metadata, ...licenseMetadata });
                  }}
                />
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="field-box">
                <label htmlFor="isrc" className="form-label">
                  ISRC
                </label>
                <input
                  id="isrc"
                  type="text"
                  placeholder=""
                  onChange={(e) =>
                    setMetadata({
                      ...metadata,
                      isrc: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="field-box">
                <label htmlFor="upc" className="form-label">
                  UPC
                </label>
                <input
                  id="upc"
                  type="text"
                  placeholder=""
                  onChange={(e) =>
                    setMetadata({
                      ...metadata,
                      project: { ...metadata.project, upc: e.target.value },
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Set Price',
      icon: <FaEthereum />,
      subTitle: 'Project Info',
      content: (
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="field-box">
              <label htmlFor="price" className="form-label">
                Enter Price (ETH)
              </label>
              <input
                id="price"
                type="number"
                placeholder="e. g. `0.01 ETH`"
                onChange={({ target }) =>
                  setPrice(Number(Number(target.value).toFixed(4)))
                }
              />
            </div>
          </div>
          <div className="col-md-12 mb-4">
            <div className="field-box">
              <label htmlFor="multiple" className="form-label">
                <input
                  id="multiple"
                  type="checkbox"
                  style={{ width: 'fit-content', marginRight: '5px' }}
                  onChange={({ target }) => {
                    setMultiple(Boolean(target.checked));
                    setQuantity(1);
                  }}
                />
                Multiple copies
              </label>
            </div>
          </div>
          <div
            className="col-md-12 mb-4"
            style={{ display: multiple ? 'block' : 'none' }}
          >
            <div className="field-box">
              <label htmlFor="quantity" className="form-label">
                Set Minting Quantity
              </label>
              <input
                id="quantity"
                type="number"
                placeholder="e. g. `5`"
                onChange={({ target }) =>
                  setQuantity(parseInt(target.value, 10))
                }
              />
            </div>
          </div>
          <div className="col-md-12 mb-4">
            <p className="formate">
              <span>
                {' '}
                Service fee:{' '}
                <strong>
                  0.25% ({String((price * 2) / 100)} ETH{' '}
                  {String(((price * 2) / 100) * ethInAud)} AUD)
                  {/* {multiple && ` x ${quantity}`} */}
                </strong>{' '}
              </span>{' '}
              <br />
              <span>
                {' '}
                You will receive as royalty:{' '}
                <strong>
                  {String((price * 10) / 100)} ETH{' '}
                  {String(((price * 10) / 100) * ethInAud)} AUD
                </strong>
              </span>
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Billing Info',
      icon: <BiCreditCard />,
      subTitle: 'Connect billing cycle',
      content: (
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="field-box">
              <label htmlFor="iban" className="form-label">
                Your IBAN #
              </label>
              <input
                id="iban"
                type="text"
                placeholder="e. g. `AT611904300234573201`"
                onChange={({ target }) => setIban(target.value)}
              />
            </div>
          </div>
          {/* <h6 className="title mb-4 mt-5">
            Pay System Fee 0.25% (
            {String(((price * 2) / 100) * ethInAud * quantity)} AUD)
          </h6>
          <div className="col-md-12 mb-4">
            <button className="btn btn-gradient btn-medium">Pay Now</button>
          </div> */}
        </div>
      ),
    },
    {
      title: 'Send for Minting',
      icon: <MdDone />,
      subTitle: 'Project Info',
      content: (
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="field-box">
              <label htmlFor="notes" className="form-label">
                Notes for System Administrator
              </label>
              <textarea
                id="notes"
                rows={3}
                placeholder="e. g. “This project is...”"
                defaultValue={''}
                style={{ height: '300px' }}
                onChange={({ target }) => setAdminNotes(target.value)}
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  console.log(user);
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
        return true;
      }
    } catch (error) {
      console.error(error);
      return false
    }
  };
  const createNFT = async (nft: any) => {
  
    
    console.log("sending nft to save in db")
    console.log("sending nft ======>", nft),
    await axios.post(`${process.env.NEXT_PUBLIC_SERVER_HOST || ''}/nfts`, nft);
  };

  const fetchNFTs = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_HOST || ''}/nfts`
    );
    return res.data;
  };

  const next = async () => {
    setCurrent(current + 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    let result
    if (current === steps.length - 1) {
      if (!connected || !user) {
        debugger
   
      result =  await connect();}
    
        // alert('Please connect to wallet first.');
       
      debugger
if(result){
      console.log({ ...metadata });
      setLoading(true);
      const data = {
        artistEmail,
        price,
        quantity,
        iban,
        adminNotes,
        address: user,
      };
      const ipfs = await createIpfsMetadata();
      if (ipfs.error) {
        console.log(ipfs.error);
      } else {
        console.log({ ...ipfs, data });
        const res = await axios(getIPFSUrl(ipfs.url));
        console.log(res);

        const nfts = await fetchNFTs();
        await createNFT({
          ...ipfs,
          data,
          content: res.data,
          mint: { ...ipfs, minted: false, nftId: nfts.length },
        });
        // let list: any = window.localStorage.getItem('nfts');
        // if (list) {
        //   list = JSON.parse(list);
        // } else {
        //   list = [];
        // }

        // list.push({
        //   ...ipfs,
        //   data,
        //   content: res.data,
        //   mint: { ...ipfs, minted: false, nftId:  },
        // });
        // window.localStorage.setItem('nfts', JSON.stringify(list));
      }
      setLoading(false);
    }}
    
  };

  const back = () => {
    setCurrent(current === 0 ? current : current - 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!connected) {
    // return <>Please conenct your wallet</>;
  }

  return (
    <section className="pt-120 pb-90">
      {contextHolder}
      <div className="container">
        {/* <form action="#"> */}
        <div className="create-item-wrapper">
          <div className="row">
            <div className="col-lg-4">
              {/* file upload area */}
              <div className="upload-area">
                <div className="upload-formate mb-6">
                  <h5 className="title mb-1">Mint your $Web3Tune</h5>
                </div>
                {/* <ReactAudioPlayer
                  src="my_audio_file.ogg"
                  autoPlay
                  controls
                  style={{
                    marginTop: '100px',
                    display: current !== 0 ? 'block' : 'none',
                  }}
                /> */}
                <div
                  className=""
                  style={{
                    display: current >= steps.length ? 'none' : 'block',
                  }}
                >
                  <Uploader
                    type={FileType.AUDIO}
                    notify={notify}
                    title="Select Music"
                    style={{ display: current === 0 ? 'block' : 'none' }}
                    onChange={(info) => {
                      const audioMetadata: any = {
                        animation_url: info.file.originFileObj,
                        mimeType: info.file.originFileObj?.type,
                      };
                      if (audioMetadata.mimeType === 'audio/wav') {
                        audioMetadata.losslessAudio = info.file.originFileObj;
                      }
                      setMetadata({ ...metadata, ...audioMetadata });
                    }}
                  />
                  <Uploader
                    type={FileType.IMAGE}
                    notify={notify}
                    title="Select Cover Photo"
                    style={{
                      marginTop: '20px',
                      display: current === 0 ? 'block' : 'none',
                    }}
                    onChange={(info) =>
                      setMetadata({
                        ...metadata,
                        image: info.file.originFileObj,
                      })
                    }
                  />
                  <Uploader
                    type={FileType.IMAGE}
                    notify={notify}
                    title="Select Track Artwork"
                    style={{
                      marginTop: '20px',
                      display: current === 0 ? 'block' : 'none',
                    }}
                    onChange={(info) => {
                      const artworkMetadata = {
                        uri: info.file.originFileObj,
                        mimeType: info.file.originFileObj?.type,
                      };
                      setMetadata({
                        ...metadata,
                        artwork: artworkMetadata,
                      });
                    }}
                  />
                  <Uploader
                    type={FileType.AUDIO}
                    notify={notify}
                    title="Select Track Visualizer"
                    style={{
                      marginTop: '20px',
                      display: current === 0 ? 'block' : 'none',
                    }}
                    onChange={(info) => {
                      const visualizerMetadata = {
                        uri: info.file.originFileObj,
                        mimeType: info.file.originFileObj?.type,
                      };
                      setMetadata({
                        ...metadata,
                        visualizer: visualizerMetadata,
                      });
                    }}
                  />
                  <Uploader
                    type={FileType.IMAGE}
                    notify={notify}
                    title="Select Project Artwork"
                    style={{
                      marginTop: '20px',
                      display: current === 0 ? 'block' : 'none',
                    }}
                    onChange={(info) => {
                      const artworkMetadata = {
                        ...metadata.project,
                        artwork: {
                          uri: info.file.originFileObj,
                          mimeType: info.file.originFileObj?.type,
                        },
                      };
                      setMetadata({
                        ...metadata,
                        project: artworkMetadata,
                      });
                    }}
                  />
                </div>
              </div>
              {/* end upoad file area */}
              {/* <div className="d-none d-lg-block mt-12">
                  <h5 className="mb-1"> Note: </h5>
                  <span>
                    {' '}
                    Service fee : <strong>1.5%</strong>{' '}
                  </span>{' '}
                  <br />
                  <span>
                    {' '}
                    You will receive : <strong>15.00 ETH $45000</strong>
                  </span>
                </div> */}
            </div>
            <div className="col-lg-8">
              <div
                className="form-field-wrapper"
                style={{ boxShadow: 'none', paddingBottom: '50px' }}
              >
                <FormSteps
                  items={items}
                  current={current}
                  style={{ marginBottom: '50px' }}
                />
                {steps[current]?.content}
                {current >= steps.length && (
                  <Result
                    status={loading ? 'info' : 'success'}
                    title={
                      loading
                        ? 'Your minting request is being generated...'
                        : 'Your minting request has been generated!'
                    }
                    subTitle={
                      loading
                        ? ''
                        : `NFT ID: ${metadata.key}. You can contact administrator at info@web3tunes.com`
                    }
                    extra={
                      loading ? (
                        <></>
                      ) : (
                        <button
                          className="btn btn-gradient btn-small"
                          onClick={() => {
                            window.location.href = '/';
                          }}
                        >
                          <span>Go to Homepage</span>
                        </button>
                      )
                    }
                  />
                )}
                {/* End .row */}
              </div>
              {/*  */}
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .create-item-wrapper */}
        {current <= steps.length && (
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex-between upload-btn-wrapper flex-wrap">
                <div className="d-flex-center ">
                  {current > 0 && (
                    <button
                      className="btn btn-gradient btn-medium mr-3"
                      onClick={back}
                    >
                      <span>{current === 0 ? 'Cancel' : 'Back'}</span>
                    </button>
                  )}
                  {/* <button className="btn btn-outline btn-medium">
                    <span>Preview</span>
                  </button> */}
                </div>
                <div className="input-box">
                  <button
                    className="btn btn-gradient btn-medium justify-content-center"
                    onClick={next}
                    disabled={loading}
                  >
                    <span>{loading ? 'Wait...' : 'Next'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ENd .row */}
        {/* </form> */}
      </div>
    </section>
  );
}

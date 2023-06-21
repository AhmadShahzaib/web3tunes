/* eslint-disable no-console */
import { NFTStorage } from 'nft.storage';
import type { PropsWithChildren } from 'react';
import React, { useContext, useState } from 'react';

export const MusicMetadataContext = React.createContext({});

export const MusicMetadataProvider = ({ children }: PropsWithChildren) => {
  const [metadata, setMetadata] = useState({ version: '0.1' });

  const createIpfsMetadata = async () => {
    const client = new NFTStorage({
      token: process.env.NEXT_PUBLIC_NFT_STORAGE_API_KEY || '',
    });
    const ipfs = await client
      // @ts-ignore
      .store(metadata)
      .then((response) => response)
      .catch((error) => {
        console.error(error);
        return { error: error.message };
      });
    return ipfs;
  };

  return (
    <MusicMetadataContext.Provider
      value={{ metadata, setMetadata, createIpfsMetadata }}
    >
      {children}
    </MusicMetadataContext.Provider>
  );
};

export const useMusicMetadata: any = () => useContext(MusicMetadataContext);

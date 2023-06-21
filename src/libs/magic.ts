import type { EthNetworkConfiguration } from 'magic-sdk';

export const formattedNetwork = (): EthNetworkConfiguration => {
  return {
    rpcUrl: process.env.REACT_APP_POLYGON_RPC_URL as string,
    chainId: 80001,
  };
};

import { Magic } from 'magic-sdk';
import Web3 from 'web3';

import { formattedNetwork } from './magic';

export const getWeb3 = async () => {
  const magic = new Magic('pk_live_A42DBA0F3A5C362C' as string, {
    network: formattedNetwork(),
  });
  const provider = await (magic.wallet as any).getProvider();
  return new Web3(provider);
};

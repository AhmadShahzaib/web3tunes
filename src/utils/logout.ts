import { Magic } from 'magic-sdk';

import { formattedNetwork } from '@/libs/magic';

// When a user logs out, disconnect with Magic & re-set web3 provider
export const logout = async (setWeb3: any, setUser: any) => {
  localStorage.removeItem('user');
  const magic = new Magic('pk_live_A42DBA0F3A5C362C' as string, {
    network: formattedNetwork(),
  });
  await magic.wallet.disconnect();

  const provider = await (magic.wallet as any).getProvider();
  setWeb3(provider);
  setUser(null);
  console.log('Successfully disconnected');
};

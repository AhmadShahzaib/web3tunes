import { Magic } from 'magic-sdk';
import React, { useContext, useEffect, useState } from 'react';

import { formattedNetwork } from '@/libs/magic';

import { logout } from '../utils/logout';
import { useWeb3 } from './Web3Context';

export const UserContext = React.createContext<any>([]);

export const UserProvider = ({ children }: any) => {
  const { setWeb3 } = useWeb3();
  const [user, setUser] = useState<any>('');

  useEffect(() => {
    if (user === '') {
      setUser(localStorage.getItem('user'));
    }
  }, []);

  const handleUserOnPageLoad = async () => {
    const magic = new Magic('pk_live_A42DBA0F3A5C362C' as string, {
      network: formattedNetwork(),
    });
    const provider = await (magic.wallet as any).getProvider();
    const accounts = await provider.request({ method: 'eth_accounts' });
    console.log('accounts', accounts);
    // If user wallet is no longer connected, logout
    if (!accounts[0] && user) {
      logout(setWeb3, setUser);
    }
    // Set user in localStorage, or clear localStorage if no wallet connected
    if (accounts[0]) {
      localStorage.setItem('user', accounts[0]);
    } else {
      localStorage.removeItem('user');
    }
    setUser(accounts[0]);
  };

  const value = React.useMemo(
    () => ({
      user,
      setUser,
    }),
    [user, setUser]
  );

  useEffect(() => {
    handleUserOnPageLoad();
  }, []);

  return (
    <UserContext.Provider value={{ ...value }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

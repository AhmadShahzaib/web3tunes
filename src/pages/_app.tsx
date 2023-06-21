/* eslint-disable import/extensions */
/* eslint-disable import/order */
import '../styles/style.scss';
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import { UserProvider } from '@/contexts/UserContext';
import { Web3ContextProvider } from '@/contexts/Web3Context';
import { MusicMetadataProvider } from '@/hooks/useMusicMetadata';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Web3ContextProvider>
    <UserProvider>
      <MusicMetadataProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </MusicMetadataProvider>
    </UserProvider>
  </Web3ContextProvider>
);

export default MyApp;

/* eslint-disable tailwindcss/no-custom-classname */
import type { NextPage } from 'next';

import Banner from '@/components/NFTDetail/Banner';
import NFTDetail from '@/components/NFTDetail/NFTDetail';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const NFTDetailPage: NextPage = () => {
  return (
    <Main
      meta={
        <Meta
          title="Web3tunes Marketplace App"
          description="Decentralized music application"
        />
      }
    >
      <Banner />
      <NFTDetail />
    </Main>
  );
};

export default NFTDetailPage;

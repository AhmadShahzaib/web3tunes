/* eslint-disable tailwindcss/no-custom-classname */
import type { NextPage } from 'next';

import Banner from '@/components/Library/Banner';
import Explore from '@/components/Library/Explore';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const LibraryPage: NextPage = () => {
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
      <Explore />
    </Main>
  );
};

export default LibraryPage;

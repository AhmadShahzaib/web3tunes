/* eslint-disable tailwindcss/no-custom-classname */
import type { NextPage } from 'next';

import Hero from '@/components/Home/Hero';
import HowItWorks from '@/components/Home/HowItWorks';
import Explore from '@/components/Library/Explore';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const HomePage: NextPage = () => {
  return (
    <Main
      meta={
        <Meta
          title="Web3tunes Marketplace App"
          description="Decentralized music application"
        />
      }
    >
      <Hero />
      <Explore />
      {/* <TopSeller />
      <PopularCollections /> */}
      <HowItWorks />
    </Main>
  );
};

export default HomePage;

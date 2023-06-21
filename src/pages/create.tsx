import type { NextPage } from 'next';

import Submit from '@/components/Submit';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const CreatePage: NextPage = () => {
  return (
    <Main
      meta={
        <Meta
          title="Web3tunes Marketplace App"
          description="Decentralized music application"
        />
      }
    >
      {/* <section className="inner-page-banner bg-2 bg-image">
        <div className="container">
          <div className="inner text-center">
            <h1 className="title">Create Item</h1>
            <nav className="mt-4">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Pages</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Create
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section> */}

      <Submit />
    </Main>
  );
};

export default CreatePage;

/* eslint-disable tailwindcss/no-custom-classname */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { getIPFSUrl } from '@/utils/lib';
// import form from 'antd/es/form';

export default function Explore() {
  const [nfts, setNfts] = useState<any[]>([]);

  const fetchNFTs = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_HOST || ''}/nfts`
    );
    res.data.forEach((n: any) => {n.id = n._id});
    
    setNfts(res.data.filter((n: any) => n.mint.minted ));
  };

  useEffect(() => {
    if (!nfts.length) {
      fetchNFTs();
    }
  }, []);

  return (
    <section className="pt-120 pb-90 ">
      <div className="container">
        <form action="#">
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-12">
              <div className="filter-wrapper">
                <div className="filter-custom-item">
                  <h4
                    className="accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#status"
                  >
                    NFTs
                  </h4>
                  <div id="status" className="show collapse">
                    <div className="filter-item-list">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="buy-now"
                        />
                        <label className="form-check-label" htmlFor="buy-now">
                          Favorites
                        </label>
                      </div>
                      {/* End .form-check */}
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="on-auctoins"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="on-auctoins"
                        >
                          Available
                        </label>
                      </div>
                      {/* End .form-check */}
                      {/* End .form-check */}
                    </div>
                  </div>
                </div>
                {/* End .accordion-item */}
              </div>
              {/* End .filter-wrapper */}
            </div>
            {/* End .col */}
            <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-12">
              <div className="row">
                {nfts.map((nft, nftIndex) => (
                  <div
                    key={`nft-${nftIndex}`}
                    className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 mb-6"
                  >
                    <div className="explore-style-one">
                      <div className="thumb">
                        <a href={`/nft/${nft.id}`}>
                          <img
                            src={getIPFSUrl(nft.content.image)}
                            alt="nft live auction thumbnail"
                            style={{ maxHeight: '250px' }}
                          />
                        </a>
                        {/* <button className="reaction-btn">
                        <i className="ri-heart-fill" />
                        <span>49</span>
                      </button> */}
                        {/* End .reaction-count */}
                      </div>
                      {/* End .thumb */}
                      <div className="content">
                        <div className="header d-flex-between pt-4">
                          <h3 className="title">
                            <a href={`/nft/${nft.id}`}>{nft.content.title}</a>
                          </h3>
                        </div>
                        {/* End product-share-wrapper */}
                        <div className="product-owner d-flex-between py-3">
                          <span className="bid-owner">
                            Owned By{' '}
                            <strong>
                              <a href="author-profile.html">
                                {nft.content.artist}
                              </a>
                            </strong>
                          </span>
                          <span className="biding-price d-flex-center">
                            <i className="ri-arrow-up-line" />
                            {parseInt(nft.data.price, 10).toFixed(2)} ETH
                          </span>
                        </div>
                        {/* End .product-owner */}
                        <div className="action-wrapper d-flex-between pt-4">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#bid_history"
                            className="history d-flex-center"
                          >
                            {Number(nft.data.quantity) > 1
                              ? `${nft.data.quantity}/${nft.data.quantity}`
                              : ''}
                          </a>
                          {Number(nft.data.quantity) === 0 ? (
                            <a className="btn btn-small">
                              <span>Sold</span>
                            </a>
                          ) : (
                            <a
                              href={`/nft/${nft.id}`}
                              className="btn btn-outline btn-small"
                            >
                              <span>
                                <i className="ri-shopping-bag-line" /> Buy Now
                              </span>
                            </a>
                          )}
                        </div>
                        {/* action-wrapper */}
                      </div>
                      {/* End .content */}
                    </div>
                  </div>
                ))}
                {/* End .col */}
              </div>
              {/* End .row */}
            </div>
            {/* End .col */}
          </div>
        </form>
        {/* End filter form */}
      </div>
      {/* End .container */}
    </section>
  );
}

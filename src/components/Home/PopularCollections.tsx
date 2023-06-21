/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';

export default function PopularCollections() {
  return (
    <section className="section-bg-separation-2 ptb-120">
      <div className="container">
        <div className="section-title">
          <span className="subtitle">Browse by category</span>
          <h2>Popular Collections</h2>
        </div>
        {/* End .section-title */}
        <div className="popular-collectoin-wrapper">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-12 mb-6">
              <div className="popular-collection-style-two">
                <a href="popular-collections-2.html" className="thumb">
                  {' '}
                  <img
                    className="img-fluid"
                    src="/assets/images/popular/4.jpg"
                    alt="popular collection"
                  />
                </a>
                <button className="reaction-btn">
                  <i className="ri-heart-fill" />
                  <span>32</span>
                </button>
                {/* End .thumbnail */}
                <div className="content d-flex-between">
                  <h4 className="title ">
                    <a href="popular-collections-2.html">Trading Cards</a>
                  </h4>
                  <span className="item-code">ERC-248</span>
                </div>
              </div>
            </div>
            {/* End .popular-collection-style-two */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-12 mb-6">
              <div className="popular-collection-style-two">
                <a href="popular-collections-2.html" className="thumb">
                  {' '}
                  <img
                    className="img-fluid"
                    src="/assets/images/popular/5.jpg"
                    alt="popular collection"
                  />
                </a>
                <button className="reaction-btn">
                  <i className="ri-heart-fill" />
                  <span>32</span>
                </button>
                {/* End .thumbnail */}
                <div className="content d-flex-between">
                  <h4 className="title ">
                    <a href="popular-collections-2.html">Music</a>
                  </h4>
                  <span className="item-code">ERC-142</span>
                </div>
              </div>
            </div>
            {/* End .popular-collection-style-two */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-12 mb-6">
              <div className="popular-collection-style-two">
                <a href="popular-collections-2.html" className="thumb">
                  {' '}
                  <img
                    className="img-fluid"
                    src="/assets/images/popular/6.jpg"
                    alt="popular collection"
                  />
                </a>
                <button className="reaction-btn">
                  <i className="ri-heart-fill" />
                  <span>32</span>
                </button>
                {/* End .thumbnail */}
                <div className="content d-flex-between">
                  <h4 className="title ">
                    <a href="popular-collections-2.html">Domain Names</a>
                  </h4>
                  <span className="item-code">ERC-247</span>
                </div>
              </div>
            </div>
            {/* End .popular-collection-style-two */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-12 mb-6">
              <div className="popular-collection-style-two">
                <a href="popular-collections-2.html" className="thumb">
                  {' '}
                  <img
                    className="img-fluid"
                    src="/assets/images/popular/7.jpg"
                    alt="popular collection"
                  />
                </a>
                <button className="reaction-btn">
                  <i className="ri-heart-fill" />
                  <span>32</span>
                </button>
                {/* End .thumbnail */}
                <div className="content d-flex-between">
                  <h4 className="title ">
                    <a href="popular-collections-2.html">Thunder Pro</a>
                  </h4>
                  <span className="item-code">ERC-323</span>
                </div>
              </div>
            </div>
            {/* End .popular-collection-style-two */}
            <div className="col-xxl-4 col-lg-4 col-md-6 col-12 mb-6">
              <div className="popular-collection-style-two">
                <a href="popular-collections-2.html" className="thumb">
                  {' '}
                  <img
                    className="img-fluid"
                    src="/assets/images/popular/8.jpg"
                    alt="popular collection"
                  />
                </a>
                <button className="reaction-btn">
                  <i className="ri-heart-fill" />
                  <span>32</span>
                </button>
                {/* End .thumbnail */}
                <div className="content d-flex-between">
                  <h4 className="title ">
                    <a href="popular-collections-2.html">Collectibles</a>
                  </h4>
                  <span className="item-code">ERC-456</span>
                </div>
              </div>
            </div>
            {/* End .popular-collection-style-two */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-12 mb-6">
              <div className="popular-collection-style-two">
                <a href="popular-collections-2.html" className="thumb">
                  {' '}
                  <img
                    className="img-fluid"
                    src="/assets/images/popular/9.jpg"
                    alt="popular collection"
                  />
                </a>
                <button className="reaction-btn">
                  <i className="ri-heart-fill" />
                  <span>32</span>
                </button>
                {/* End .thumbnail */}
                <div className="content d-flex-between">
                  <h4 className="title ">
                    <a href="popular-collections-2.html">Utility</a>
                  </h4>
                  <span className="item-code">ERC-765</span>
                </div>
              </div>
            </div>
            {/* End .popular-collection-style-two */}
          </div>
          {/* End .row */}
        </div>
      </div>
      {/* End .container */}
    </section>
  );
}

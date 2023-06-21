/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';

export default function Explore() {
  return (
    <section className="pt-120 pb-90 masonary-wrapper-activation">
      <div className="container">
        <div className="section-title">
          <span className="subtitle">Exclusive Assets</span>
          <h2>Explore</h2>
        </div>
        {/* End .section-title */}
        <form action="#" className="mb-10">
          <div
            className="filter-style-one common-filter d-flex-between"
            style={{ display: 'none' }}
          >
            <div className="d-flex-center filter-left-cate">
              <div className="filter-select-option">
                <select>
                  <option>All Categories</option>
                  <option value="art">Art</option>
                  <option value="photography">Photography</option>
                  <option value="games">Games</option>
                  <option value="metaverses">Metaverses</option>
                </select>
              </div>
              {/* End categorie */}
              <div className="filter-select-option">
                <select>
                  <option>Collections</option>
                  <option value="clonex">Clone X</option>
                  <option value="pantabear">Panta Bear</option>
                  <option value="sandbox">Sandbox</option>
                  <option value="townstar">Town Star</option>
                </select>
              </div>
              {/* End collections */}
              <div className="filter-select-option">
                <select>
                  <option>Sale Type</option>
                  <option value="timed_auction">Timed auction</option>
                  <option value="fixed_price">Fixed Price</option>
                  <option value="not_for-sale">Not for sale</option>
                  <option value="open_offers">Open for offers</option>
                </select>
              </div>
              {/* End sale type */}
            </div>
            {/* End .left filer */}
            <div className="d-flex-center filter-right-cate">
              <div className="filter-select-option">
                <select>
                  <option>All Artwork</option>
                  <option value="today">Today</option>
                  <option value="last_seven-days">Last 7 Days</option>
                  <option value="last-thirty-days">Last 30 Days</option>
                  <option value="all_times">All Time</option>
                </select>
              </div>
              {/* End All Artwork */}
              <div className="filter-select-option">
                <select>
                  <option>Sort By</option>
                  <option value="sale-volume">Sale Volume</option>
                  <option value="most_likes">Most Likes</option>
                  <option value="most-views">Most Views</option>
                  <option value="low_to-high">Price: Low to High</option>
                  <option value="hight_to-low">Price: High to Low</option>
                  <option value="recently_added">Recently Added</option>
                  <option value="auction_ending-soon">
                    Auction Ending Soon
                  </option>
                </select>
              </div>
              {/* End Sort BY */}
            </div>
            {/* End .right filer */}
          </div>
          {/* filter-style-one */}
        </form>
        {/* End filter form */}
        <div className="grid-filter-wrapper mesonry-list">
          <div className="resizer" />
          <div className="grid-item cat--4">
            <div className="explore-style-one">
              <div className="thumb">
                <a href="#">
                  {' '}
                  <img
                    src="/assets/images/explore/21.jpg"
                    alt="nft live auction thumbnail"
                  />
                </a>
                <button className="reaction-btn">
                  <i className="ri-heart-fill" />
                  <span>49</span>
                </button>
                {/* End .reaction-count */}
              </div>
              {/* End .thumb */}
              <div className="content">
                <div className="header d-flex-between pt-4 pb-3">
                  <h3 className="title">
                    <a href="product-details.html">BruceTheGoose.Eth™</a>
                  </h3>
                  <div className="more-dropdown ">
                    <i className="ri-more-fill" data-bs-toggle="dropdown" />
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li>
                        <a className="dropdown-item" href="#">
                          New bid
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Refresh Metadata
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Share
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* .header */}
                <div className="product-share-wrapper">
                  <div className="profile-share d-flex-center">
                    <a
                      href="authors.html"
                      className="avatar"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Banuri Bari"
                    >
                      <img
                        src="/assets/images/explore/avatar/1.png"
                        alt="Nft_Profile"
                      />
                    </a>
                    <a
                      href="authors.html"
                      className="avatar"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Mark Keni"
                    >
                      <img
                        src="/assets/images/explore/avatar/2.png"
                        alt="Nft_Profile"
                      />
                    </a>
                    <a
                      href="authors.html"
                      className="avatar"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Diago Smith"
                    >
                      <img
                        src="/assets/images/explore/avatar/3.png"
                        alt="Nft_Profile"
                      />
                    </a>
                    <a className="more-author-text" href="#" tabIndex={0}>
                      20+ People Place Bit
                    </a>
                  </div>
                </div>
                {/* End product-share-wrapper */}
                <div className="product-owner d-flex-between py-4">
                  <span className="bid-owner">
                    Owned By{' '}
                    <strong>
                      <a href="author-profile.html">Zuckerberg</a>
                    </strong>
                  </span>
                  <span className="biding-price d-flex-center">
                    <i className="ri-arrow-up-line" />
                    76.4 ETH
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
                    <i className="ri-history-line" />
                    View History
                  </a>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#placeBit"
                    className="btn btn-outline btn-small"
                  >
                    <span>
                      <i className="ri-shopping-bag-line" /> Place Bid
                    </span>
                  </a>
                </div>
                {/* action-wrapper */}
              </div>
              {/* End .content */}
            </div>
          </div>
          {/* End .explore-style-one */}
          <div className="grid-item cat--4">
            <div className="explore-style-one">
              <div className="thumb">
                <a href="product-details.html">
                  <img
                    src="/assets/images/explore/22.jpg"
                    alt="nft live auction thumbnail"
                  />
                </a>
                <button className="reaction-btn">
                  <i className="ri-heart-fill" />
                  <span>12</span>
                </button>
                {/* End .reaction-count */}
              </div>
              {/* End .thumb */}
              <div className="content">
                <div className="header d-flex-between pt-4 pb-3">
                  <h3 className="title">
                    <a href="product-details.html">Dead Rover Club</a>
                  </h3>
                  <div className="more-dropdown ">
                    <i className="ri-more-fill" data-bs-toggle="dropdown" />
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li>
                        <a className="dropdown-item" href="#">
                          New bid
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Refresh Metadata
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Share
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* .header */}
                <div className="product-share-wrapper">
                  <div className="profile-share d-flex-center">
                    <a
                      href="authors.html"
                      className="avatar"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Banuri Bari"
                    >
                      <img
                        src="/assets/images/explore/avatar/1.png"
                        alt="Nft_Profile"
                      />
                    </a>
                    <a
                      href="authors.html"
                      className="avatar"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Mark Keni"
                    >
                      <img
                        src="/assets/images/explore/avatar/2.png"
                        alt="Nft_Profile"
                      />
                    </a>
                    <a
                      href="authors.html"
                      className="avatar"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Diago Smith"
                    >
                      <img
                        src="/assets/images/explore/avatar/3.png"
                        alt="Nft_Profile"
                      />
                    </a>
                    <a className="more-author-text" href="#" tabIndex={0}>
                      20+ People Place Bit
                    </a>
                  </div>
                </div>
                {/* End product-share-wrapper */}
                <div className="product-owner d-flex-between py-4">
                  <span className="bid-owner">
                    Owned By{' '}
                    <strong>
                      <a href="author-profile.html">Zuckerberg</a>
                    </strong>
                  </span>
                  <span className="biding-price d-flex-center">
                    <i className="ri-arrow-up-line" />
                    76.4 ETH
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
                    <i className="ri-history-line" />
                    View History
                  </a>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#placeBit"
                    className="btn btn-outline btn-small"
                  >
                    <span>
                      <i className="ri-shopping-bag-line" /> Place Bid
                    </span>
                  </a>
                </div>
                {/* action-wrapper */}
              </div>
              {/* End .content */}
            </div>
          </div>
          {/* End .explore-style-one */}
          <div className="grid-item cat--1 cat--2 ">
            <div className="explore-style-one">
              <div className="thumb">
                <a href="product-details.html">
                  <img
                    src="/assets/images/explore/10.jpg"
                    alt="nft live auction thumbnail"
                  />
                </a>
                <button className="reaction-btn">
                  <i className="ri-heart-fill" />
                  <span>19</span>
                </button>
                {/* End .reaction-count */}
              </div>
              {/* End .thumb */}
              <div className="content">
                <div className="header d-flex-between pt-4 pb-3">
                  <h3 className="title">
                    <a href="product-details.html">SudsyPanda</a>
                  </h3>
                  <div className="more-dropdown ">
                    <i className="ri-more-fill" data-bs-toggle="dropdown" />
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li>
                        <a className="dropdown-item" href="#">
                          New bid
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Refresh Metadata
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Share
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* .header */}
                <div className="product-share-wrapper">
                  <div className="profile-share d-flex-center">
                    <a
                      href="authors.html"
                      className="avatar"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Banuri Bari"
                    >
                      <img
                        src="/assets/images/explore/avatar/1.png"
                        alt="Nft_Profile"
                      />
                    </a>
                    <a
                      href="authors.html"
                      className="avatar"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Mark Keni"
                    >
                      <img
                        src="/assets/images/explore/avatar/2.png"
                        alt="Nft_Profile"
                      />
                    </a>
                    <a
                      href="authors.html"
                      className="avatar"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Diago Smith"
                    >
                      <img
                        src="/assets/images/explore/avatar/3.png"
                        alt="Nft_Profile"
                      />
                    </a>
                    <a className="more-author-text" href="#" tabIndex={0}>
                      20+ People Place Bit
                    </a>
                  </div>
                </div>
                {/* End product-share-wrapper */}
                <div className="product-owner d-flex-between py-4">
                  <span className="bid-owner">
                    Owned By{' '}
                    <strong>
                      <a href="author-profile.html">Jacson Rio</a>
                    </strong>
                  </span>
                  <span className="biding-price d-flex-center">
                    <i className="ri-arrow-up-line" />
                    76.4 ETH
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
                    <i className="ri-history-line" />
                    View History
                  </a>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#placeBit"
                    className="btn btn-outline btn-small"
                  >
                    <span>
                      <i className="ri-shopping-bag-line" /> Place Bid
                    </span>
                  </a>
                </div>
                {/* action-wrapper */}
              </div>
              {/* End .content */}
            </div>
          </div>
          {/* End .explore-style-one */}
          <div className="grid-item cat--3">
            <div className="explore-style-one">
              <div className="thumb">
                <a href="product-details.html">
                  <img
                    src="/assets/images/explore/23.jpg"
                    alt="nft live auction thumbnail"
                  />
                </a>
                <button className="reaction-btn">
                  <i className="ri-heart-fill" />
                  <span>08</span>
                </button>
                {/* End .reaction-count */}
              </div>
              {/* End .thumb */}
              <div className="content">
                <div className="header d-flex-between pt-4 pb-3">
                  <h3 className="title">
                    <a href="product-details.html">TrapMonkie 3D</a>
                  </h3>
                  <div className="more-dropdown ">
                    <i className="ri-more-fill" data-bs-toggle="dropdown" />
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li>
                        <a className="dropdown-item" href="#">
                          New bid
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Refresh Metadata
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Share
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* .header */}
                <div className="product-share-wrapper">
                  <div className="profile-share d-flex-center">
                    <a
                      href="authors.html"
                      className="avatar"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Banuri Bari"
                    >
                      <img
                        src="/assets/images/explore/avatar/1.png"
                        alt="Nft_Profile"
                      />
                    </a>
                    <a
                      href="authors.html"
                      className="avatar"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Mark Keni"
                    >
                      <img
                        src="/assets/images/explore/avatar/2.png"
                        alt="Nft_Profile"
                      />
                    </a>
                    <a
                      href="authors.html"
                      className="avatar"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Diago Smith"
                    >
                      <img
                        src="/assets/images/explore/avatar/3.png"
                        alt="Nft_Profile"
                      />
                    </a>
                    <a className="more-author-text" href="#" tabIndex={0}>
                      20+ People Place Bit
                    </a>
                  </div>
                </div>
                {/* End product-share-wrapper */}
                <div className="product-owner d-flex-between py-4">
                  <span className="bid-owner">
                    Owned By{' '}
                    <strong>
                      <a href="author-profile.html">Fuliani</a>
                    </strong>
                  </span>
                  <span className="biding-price d-flex-center">
                    <i className="ri-arrow-up-line" />
                    76.4 ETH
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
                    <i className="ri-history-line" />
                    View History
                  </a>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#placeBit"
                    className="btn btn-outline btn-small"
                  >
                    <span>
                      <i className="ri-shopping-bag-line" /> Place Bid
                    </span>
                  </a>
                </div>
                {/* action-wrapper */}
              </div>
              {/* End .content */}
            </div>
          </div>
          {/* End .explore-style-one */}
          <div className="grid-item cat--1 cat--4">
            <div className="explore-style-one">
              <div className="thumb">
                <a href="product-details.html">
                  <img
                    src="/assets/images/explore/26.jpg"
                    alt="nft live auction thumbnail"
                  />
                </a>
                <button className="reaction-btn">
                  <i className="ri-heart-fill" />
                  <span>55</span>
                </button>
                {/* End .reaction-count */}
              </div>
              {/* End .thumb */}
              <div className="content">
                <div className="header d-flex-between pt-4 pb-3">
                  <h3 className="title">
                    <a href="product-details.html">TrapMonkie - Meditation</a>
                  </h3>
                  <div className="more-dropdown ">
                    <i className="ri-more-fill" data-bs-toggle="dropdown" />
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li>
                        <a className="dropdown-item" href="#">
                          New bid
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Refresh Metadata
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Share
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* .header */}
                <div className="product-share-wrapper">
                  <div className="profile-share d-flex-center">
                    <a
                      href="authors.html"
                      className="avatar"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Banuri Bari"
                    >
                      <img
                        src="/assets/images/explore/avatar/1.png"
                        alt="Nft_Profile"
                      />
                    </a>
                    <a
                      href="authors.html"
                      className="avatar"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Mark Keni"
                    >
                      <img
                        src="/assets/images/explore/avatar/2.png"
                        alt="Nft_Profile"
                      />
                    </a>
                    <a
                      href="authors.html"
                      className="avatar"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Diago Smith"
                    >
                      <img
                        src="/assets/images/explore/avatar/3.png"
                        alt="Nft_Profile"
                      />
                    </a>
                    <a className="more-author-text" href="#" tabIndex={0}>
                      20+ People Place Bit
                    </a>
                  </div>
                </div>
                {/* End product-share-wrapper */}
                <div className="product-owner d-flex-between py-4">
                  <span className="bid-owner">
                    Owned By{' '}
                    <strong>
                      <a href="author-profile.html">Kartik</a>
                    </strong>
                  </span>
                  <span className="biding-price d-flex-center">
                    <i className="ri-arrow-up-line" />
                    76.4 ETH
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
                    <i className="ri-history-line" />
                    View History
                  </a>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#placeBit"
                    className="btn btn-outline btn-small"
                  >
                    <span>
                      <i className="ri-shopping-bag-line" /> Place Bid
                    </span>
                  </a>
                </div>
                {/* action-wrapper */}
              </div>
              {/* End .content */}
            </div>
          </div>
          {/* End .explore-style-one */}
          <div className="grid-item cat--2 cat--3">
            <div className="explore-style-one">
              <div className="thumb">
                <a href="product-details.html">
                  <img
                    src="/assets/images/explore/28.jpg"
                    alt="nft live auction thumbnail"
                  />
                </a>
                <button className="reaction-btn">
                  <i className="ri-heart-fill" />
                  <span>25</span>
                </button>
                {/* End .reaction-count */}
              </div>
              {/* End .thumb */}
              <div className="content">
                <div className="header d-flex-between pt-4 pb-3">
                  <h3 className="title">
                    <a href="product-details.html">Illustrations</a>
                  </h3>
                  <div className="more-dropdown ">
                    <i className="ri-more-fill" data-bs-toggle="dropdown" />
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li>
                        <a className="dropdown-item" href="#">
                          New bid
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Refresh Metadata
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Share
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* .header */}
                <div className="product-share-wrapper">
                  <div className="profile-share d-flex-center">
                    <a
                      href="authors.html"
                      className="avatar"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Banuri Bari"
                    >
                      <img
                        src="/assets/images/explore/avatar/1.png"
                        alt="Nft_Profile"
                      />
                    </a>
                    <a
                      href="authors.html"
                      className="avatar"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Mark Keni"
                    >
                      <img
                        src="/assets/images/explore/avatar/2.png"
                        alt="Nft_Profile"
                      />
                    </a>
                    <a
                      href="authors.html"
                      className="avatar"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Diago Smith"
                    >
                      <img
                        src="/assets/images/explore/avatar/3.png"
                        alt="Nft_Profile"
                      />
                    </a>
                    <a className="more-author-text" href="#" tabIndex={0}>
                      20+ People Place Bit
                    </a>
                  </div>
                </div>
                {/* End product-share-wrapper */}
                <div className="product-owner d-flex-between py-4">
                  <span className="bid-owner">
                    Owned By{' '}
                    <strong>
                      <a href="author-profile.html">Richardson</a>
                    </strong>
                  </span>
                  <span className="biding-price d-flex-center">
                    <i className="ri-arrow-up-line" />
                    76.4 ETH
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
                    <i className="ri-history-line" />
                    View History
                  </a>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#placeBit"
                    className="btn btn-outline btn-small"
                  >
                    <span>
                      <i className="ri-shopping-bag-line" /> Place Bid
                    </span>
                  </a>
                </div>
                {/* action-wrapper */}
              </div>
              {/* End .content */}
            </div>
          </div>
          {/* End .explore-style-one */}
          <div className="grid-item cat--4">
            <div className="explore-style-one">
              <div className="thumb">
                <a href="#">
                  {' '}
                  <img
                    src="/assets/images/explore/29.jpg"
                    alt="nft live auction thumbnail"
                  />
                </a>
                <button className="reaction-btn">
                  <i className="ri-heart-fill" />
                  <span>14</span>
                </button>
                {/* End .reaction-count */}
              </div>
              {/* End .thumb */}
              <div className="content">
                <div className="header d-flex-between pt-4 pb-3">
                  <h3 className="title">
                    <a href="product-details.html">Collectibeles</a>
                  </h3>
                  <div className="more-dropdown ">
                    <i className="ri-more-fill" data-bs-toggle="dropdown" />
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li>
                        <a className="dropdown-item" href="#">
                          New bid
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Refresh Metadata
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Share
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* .header */}
                <div className="product-share-wrapper">
                  <div className="profile-share d-flex-center">
                    <a
                      href="authors.html"
                      className="avatar"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Banuri Bari"
                    >
                      <img
                        src="/assets/images/explore/avatar/1.png"
                        alt="Nft_Profile"
                      />
                    </a>
                    <a
                      href="authors.html"
                      className="avatar"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Mark Keni"
                    >
                      <img
                        src="/assets/images/explore/avatar/2.png"
                        alt="Nft_Profile"
                      />
                    </a>
                    <a
                      href="authors.html"
                      className="avatar"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Diago Smith"
                    >
                      <img
                        src="/assets/images/explore/avatar/3.png"
                        alt="Nft_Profile"
                      />
                    </a>
                    <a className="more-author-text" href="#" tabIndex={0}>
                      20+ People Place Bit
                    </a>
                  </div>
                </div>
                {/* End product-share-wrapper */}
                <div className="product-owner d-flex-between py-4">
                  <span className="bid-owner">
                    Owned By{' '}
                    <strong>
                      <a href="author-profile.html">Mark Keni</a>
                    </strong>
                  </span>
                  <span className="biding-price d-flex-center">
                    <i className="ri-arrow-up-line" />
                    76.4 ETH
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
                    <i className="ri-history-line" />
                    View History
                  </a>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#placeBit"
                    className="btn btn-outline btn-small"
                  >
                    <span>
                      <i className="ri-shopping-bag-line" /> Place Bid
                    </span>
                  </a>
                </div>
                {/* action-wrapper */}
              </div>
              {/* End .content */}
            </div>
          </div>
          {/* End .explore-style-one */}
          <div className="grid-item cat--1 cat--3">
            <div className="explore-style-one">
              <div className="thumb">
                <a href="product-details.html">
                  <img
                    src="/assets/images/explore/32.jpg"
                    alt="nft live auction thumbnail"
                  />
                </a>
                <button className="reaction-btn">
                  <i className="ri-heart-fill" />
                  <span>32</span>
                </button>
                {/* End .reaction-count */}
              </div>
              {/* End .thumb */}
              <div className="content">
                <div className="header d-flex-between pt-4 pb-3">
                  <h3 className="title">
                    <a href="product-details.html">Virtual Worlds</a>
                  </h3>
                  <div className="more-dropdown ">
                    <i className="ri-more-fill" data-bs-toggle="dropdown" />
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li>
                        <a className="dropdown-item" href="#">
                          New bid
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Refresh Metadata
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Share
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* .header */}
                <div className="product-share-wrapper">
                  <div className="profile-share d-flex-center">
                    <a
                      href="authors.html"
                      className="avatar"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Banuri Bari"
                    >
                      <img
                        src="/assets/images/explore/avatar/1.png"
                        alt="Nft_Profile"
                      />
                    </a>
                    <a
                      href="authors.html"
                      className="avatar"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Mark Keni"
                    >
                      <img
                        src="/assets/images/explore/avatar/2.png"
                        alt="Nft_Profile"
                      />
                    </a>
                    <a
                      href="authors.html"
                      className="avatar"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Diago Smith"
                    >
                      <img
                        src="/assets/images/explore/avatar/3.png"
                        alt="Nft_Profile"
                      />
                    </a>
                    <a className="more-author-text" href="#" tabIndex={0}>
                      20+ People Place Bit
                    </a>
                  </div>
                </div>
                {/* End product-share-wrapper */}
                <div className="product-owner d-flex-between py-4">
                  <span className="bid-owner">
                    Owned By{' '}
                    <strong>
                      <a href="author-profile.html">Banuri</a>
                    </strong>
                  </span>
                  <span className="biding-price d-flex-center">
                    <i className="ri-arrow-up-line" />
                    76.4 ETH
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
                    <i className="ri-history-line" />
                    View History
                  </a>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#placeBit"
                    className="btn btn-outline btn-small"
                  >
                    <span>
                      <i className="ri-shopping-bag-line" /> Place Bid
                    </span>
                  </a>
                </div>
                {/* action-wrapper */}
              </div>
              {/* End .content */}
            </div>
          </div>
          {/* End .explore-style-one */}
        </div>
        {/* End .grid-filter-wrapper */}
      </div>
      {/* End .container */}
    </section>
  );
}

/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';

export default function MobileMenu() {
  return (
    <div className="popup-mobile-menu">
      <div className="inner">
        <div className="header-top">
          <div className="logo logo-custom-css">
            <a href="index.html" className="logo logo-light">
              <img src="/assets/images/logo-white.png" alt="brand" />{' '}
            </a>
            <a href="index.html" className="logo logo-dark">
              <img src="/assets/images/logo-dark.png" alt="brand" />{' '}
            </a>
          </div>
          <div className="close-menu">
            <button className="close-button">
              <i className="ri-close-fill" />
            </button>
          </div>
        </div>
        <nav>
          {/* Start Mainmanu Nav */}
          <ul className="mainmenu">
            <li className="has-dropdown has-menu-child-item">
              <a className="active" href="index-2.html">
                Home
              </a>
              <ul className="submenu">
                <li>
                  <a href="index.html" className="active">
                    Home Style One{' '}
                  </a>
                </li>
                <li>
                  <a href="index-2.html">Home Style Two</a>
                </li>
                <li>
                  <a href="index-3.html">Home Style Three</a>
                </li>
                <li>
                  <a href="index-4.html">Home Style Four </a>
                </li>
                <li>
                  <a href="index-5.html">Home Style Five</a>
                </li>
                <li>
                  <a href="index-6.html">Home Style Six</a>
                </li>
                <li>
                  <a href="index-7.html">
                    Home Style Seven<span className="new">(New)</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-dropdown has-menu-child-item">
              <a href="#">Explore</a>
              <ul className="submenu">
                <li>
                  <a href="explore-filter.html">Explore Filter</a>
                </li>
                <li>
                  <a href="explore-isotop.html">Explore Isotop</a>
                </li>
                <li>
                  <a href="explore-carousel.html">Explore Carousel</a>
                </li>
                <li>
                  <a href="explore-filter-sidebar.html">
                    Explore Filter Sidebar
                  </a>
                </li>
                <li>
                  <a href="live-auction-1.html">Live Auction 1</a>
                </li>
                <li>
                  <a href="live-auction-2.html">Live Auction 2</a>
                </li>
                <li>
                  <a href="live-auction-3.html">Live Auction 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="activity.html">Activity</a>
            </li>
            <li className="has-dropdown has-menu-child-item">
              <a href="#">Community</a>
              <ul className="submenu">
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="blog-details.html">Blog Details</a>
                </li>
              </ul>
            </li>
            <li className="has-dropdown has-menu-child-item">
              <a href="#">Pages</a>
              <ul className="submenu">
                <li>
                  <a href="product-details.html">Item Details</a>
                </li>
                <li>
                  <a href="authors.html">Authors</a>
                </li>
                <li>
                  <a href="author-profile.html">Author Profile</a>
                </li>
                <li>
                  <a href="all-sellers.html">All Sellers</a>
                </li>
                <li>
                  <a href="all-sellers-2.html">All Sellers 2</a>
                </li>
                <li>
                  <a href="popular-collections.html">Popular Collections</a>
                </li>
                <li>
                  <a href="popular-collections-2.html">Popular Collections-2</a>
                </li>
                <li>
                  <a href="wallet.html">Wallet Connect</a>
                </li>
                <li>
                  <a href="create.html">Create Item</a>
                </li>
                <li>
                  <a href="notification.html">Notification</a>
                </li>
                <li>
                  <a href="signin.html">Sign In</a>
                </li>
                <li>
                  <a href="signin-2.html">Sign In 2</a>
                </li>
                <li>
                  <a href="forgot-password.html">Forgot Password</a>
                </li>
                <li>
                  <a href="signup.html">SignUp</a>
                </li>
                <li>
                  <a href="404.html">404</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
          {/* End Mainmanu Nav */}
        </nav>
      </div>
    </div>
  );
}

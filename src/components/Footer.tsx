/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-inner pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 mb-8">
              <div className="footer-widget first-block">
                <div className="mb-4">
                  <a href="index.html" className="logo-light">
                    <img src="/assets/images/logo-white.png" alt="brand" />
                  </a>
                  <a href="index.html" className="logo logo-dark">
                    <img src="/assets/images/logo-dark.png" alt="brand" />{' '}
                  </a>
                </div>
                <p className="mb-5">
                  Banu is the best NFT Marketplace Template because the we have
                  selected the most active and Creative Research.
                </p>
                <div className="social">
                  <a className="icon-facebook" href="#">
                    <i className="ri-facebook-line" />
                  </a>
                  <a className="icon-twitter" href="#">
                    <i className="ri-twitter-line" />
                  </a>
                  <a className="icon-instagram" href="#">
                    <i className="ri-instagram-line" />
                  </a>
                  <a className="icon-linkedin" href="#">
                    <i className="ri-linkedin-line" />
                  </a>
                </div>
              </div>
            </div>
            {/* End .col */}
            <div className="col-lg-2 col-md-6 mb-8">
              <div className="footer-widget">
                <h4>Marketplace</h4>
                <ul className="footer-list-widget">
                  <li>
                    <a href="authors.html">Authors</a>
                  </li>
                  <li>
                    <a href="author-profile.html">Author Profile</a>
                  </li>
                  <li>
                    <a href="create.html">Create</a>
                  </li>
                  <li>
                    <a href="explore-carousel.html">Explore</a>
                  </li>
                  <li>
                    <a href="wallet.html">Wallet Connect</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End .col */}
            <div className="col-lg-2 col-md-6 mb-8">
              <div className="footer-widget">
                <h4>Community</h4>
                <ul className="footer-list-widget">
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="activity.html">Activity</a>
                  </li>
                  <li>
                    <a href="popular-collections-2.html">Collections</a>
                  </li>
                  <li>
                    <a href="signin.html">Signin</a>
                  </li>
                  <li>
                    <a href="signup.html">SignUp</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End .col */}
            <div className="col-lg-3 col-md-6 mb-8">
              <div className="footer-widget">
                <h4>join newsletter</h4>
                <p>
                  Signup for our newsletter to get the latest news in your
                  inbox.
                </p>
                <form action="#">
                  <div className="subscribe-mail">
                    <input
                      type="text"
                      name="email"
                      id="subscribe-email"
                      placeholder="Email Address"
                    />
                    <button className="btn btn-small btn-gradient">
                      <span>
                        <i className="ri-send-plane-line" />
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
        {/* End .container */}
      </div>
      <div className="copyright text-center">
        <div className="container">
          <div>
            Copyright © 2022{' '}
            <a
              href="https://themeforest.net/user/ib-themes"
              target="_blank"
              rel="noreferrer"
            >
              ib-themes.
            </a>{' '}
            All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

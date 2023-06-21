/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';

import { useUser } from '@/contexts/UserContext';

export default function Hero() {
  const { user } = useUser();

  return (
    <section className="hero-banner-style hero-banner-style-2  bg-3 bg-image top-section-gap ">
      <div className="hero-banner_inner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-7 col-xl-6 order-xl-1 col-lg-12 order-2">
              <div className="banner-content">
                <h1 className="title mb-6" data-aos="fade-up">
                  Create <span className="color_primary">Crypto</span>
                  <br />
                  NFT dream <br /> gallery
                  <img
                    src="/assets/images/shape/4.svg"
                    alt="shape"
                    className="shape shape-4"
                  />
                </h1>
                <p data-aos="fade-up" data-aos-delay={100}>
                  Find exclusive digital artwork. collect digital artwork <br />
                  make money by doing something you passionate.
                </p>
                <div
                  className="group-btn mt-8"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  {/* <a
                    href="explore-filter-sidebar.html"
                    className="btn btn-gradient"
                  >
                    <span>
                      <i className="ri-rocket-line" />
                      Explore
                    </span>
                  </a> */}
                  <a
                    href="#"
                    onClick={() => {
                      if (!user) {
                        // eslint-disable-next-line no-alert
                        // alert('Please connect to wallet first.');
                        // return;
                      }
                      window.location.href = '/create';
                    }}
                    className="btn btn-outline"
                  >
                    <span>
                      <i className="ri-edit-line" /> Submit Your Music
                    </span>
                  </a>
                </div>
              </div>
              {/* End banner-content */}
            </div>
            {/* End .col */}
            <div className="col-xxl-5 col-xl-6 order-xl-2 col-lg-12 order-1">
              <div className="explore-style-three d-flex-center">
                <div className="thumb-wrapper">
                  <img
                    src="/assets/images/explore/hero/3.png"
                    alt="hero shape image"
                    className="large img-fluid"
                  />
                  <img
                    className="shape  jump shape-5 "
                    src="/assets/images/shape/8.png"
                    alt="shape"
                  />
                  <img
                    className="shape shape-6 rotate-360"
                    src="/assets/images/shape/6.png"
                    alt="shape"
                  />
                </div>
                {/* End .thumb */}
                <div className="counter-wrapper">
                  <div className="counter-style-1">
                    <div className="d-flex-center">
                      <div className="number counter-item-active">32</div>
                      <div className="count-kilo">
                        K <span>+</span>
                      </div>
                    </div>
                    <div className="counter-title">Artworks</div>
                  </div>
                  {/* End .single-counter */}
                  <div className="counter-style-1">
                    <div className="d-flex-center">
                      <div className="number counter-item-active">27</div>
                      <div className="count-kilo">
                        K <span>+</span>
                      </div>
                    </div>
                    <div className="counter-title">Auctions</div>
                  </div>
                  {/* End .single-counter */}
                  <div className="counter-style-1">
                    <div className="d-flex-center">
                      <div className="number counter-item-active">16</div>
                      <div className="count-kilo">
                        K <span>+</span>
                      </div>
                    </div>
                    <div className="counter-title">Artist</div>
                  </div>
                  {/* End .single-counter */}
                </div>
                {/* End .counter-wrapper */}
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
        {/* End .container */}
      </div>
      <img
        src="/assets/images/shape/1.png"
        alt="shap"
        className="shape shape-7"
      />
    </section>
  );
}

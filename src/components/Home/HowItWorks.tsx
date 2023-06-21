/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';

export default function HowItWorks() {
  // useEffect(() => {
  //   if (window.$) {
  //     window.$('.wallet-activation').slick({
  //       infinite: true,
  //       slidesToShow: 3,
  //       slidesToScroll: 1,
  //       dots: false,
  //       arrows: true,
  //       cssEase: 'linear',
  //       adaptiveHeight: true,
  //       prevArrow:
  //         '<button class="slide-arrow prev-arrow"><i class="ri-arrow-left-line"></i></button>',
  //       nextArrow:
  //         '<button class="slide-arrow next-arrow"><i class="ri-arrow-right-line"></i></button>',
  //       responsive: [
  //         {
  //           breakpoint: 1399,
  //           settings: {
  //             slidesToShow: 2,
  //             slidesToScroll: 1,
  //           },
  //         },
  //         {
  //           breakpoint: 1200,
  //           settings: {
  //             slidesToShow: 2,
  //             slidesToScroll: 1,
  //           },
  //         },
  //         {
  //           breakpoint: 992,
  //           settings: {
  //             slidesToShow: 2,
  //             slidesToScroll: 1,
  //           },
  //         },
  //         {
  //           breakpoint: 576,
  //           settings: {
  //             slidesToShow: 1,
  //             slidesToScroll: 1,
  //             dots: true,
  //             arrows: false,
  //           },
  //         },
  //       ],
  //     });
  //   }
  // }, []);

  return (
    <section className="wallet-setup ptb-120">
      <div className="container">
        <div className="section-title">
          <span className="subtitle">HOW IT WORKS</span>
          <h2>Create &amp; sell your NFTs</h2>
        </div>
        {/* End .section-title */}
        <div className=" slider wallet-activation slick-arrow-between slick-gutter-15">
          <div className="card-block-style-one">
            <img
              className="thumb mb-5"
              src="/assets/images/icon/1.png"
              alt="wallet"
            />
            <h3 className="title mb-3">set up your wallet</h3>
            <p>
              There are a few things worth doing before creating your first
              NFTs. In the image above, you’ll not personalized banner. To
              upload yours, press the pencil icon in the top right.
            </p>
          </div>
          {/* End .card-block-style-one */}
          <div className="card-block-style-one">
            <img
              className="thumb mb-5"
              src="/assets/images/icon/2.png"
              alt="wallet"
            />
            <h3 className="title mb-3">Create your collection</h3>
            <p>
              There are a few things worth doing before creating your first
              NFTs. In the image above, you’ll not personalized banner. To
              upload yours, press the pencil icon in the top right.
            </p>
          </div>
          {/* End .card-block-style-one */}
          <div className="card-block-style-one">
            <img
              className="thumb mb-5"
              src="/assets/images/icon/3.png"
              alt="wallet"
            />
            <h3 className="title mb-3">List them for sale</h3>
            <p>
              There are a few things worth doing before creating your first
              NFTs. In the image above, you’ll not personalized banner. To
              upload yours, press the pencil icon in the top right.
            </p>
          </div>
          {/* End .card-block-style-one */}
          <div className="card-block-style-one">
            <img
              className="thumb mb-5"
              src="/assets/images/icon/3.png"
              alt="wallet"
            />
            <h3 className="title mb-3">List them for sale</h3>
            <p>
              There are a few things worth doing before creating your first
              NFTs. In the image above, you’ll not personalized banner. To
              upload yours, press the pencil icon in the top right.
            </p>
          </div>
          {/* End .card-block-style-one */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </section>
  );
}

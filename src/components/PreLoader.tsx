import React from 'react';

export default function PreLoader() {
  return (
    <div id="preloader">
      <div id="ctn-preloader" className="ctn-preloader">
        <div className="animation-preloader">
          <div className="icon">
            <img
              src="/assets/images/logo-preloader.png"
              alt="logo"
              className="d-block m-auto"
            />{' '}
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}

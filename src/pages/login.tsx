/* eslint-disable tailwindcss/no-custom-classname */
import type { NextPage } from 'next';

import ImportedScript from '@/components/ImportedScript';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const LoginPage: NextPage = () => {
  return (
    <Main
      meta={
        <Meta
          title="Web3tunes Marketplace App"
          description="Decentralized music application"
        />
      }
    >
      {/* Start banner area */}
      <section className="inner-page-banner bg-2 bg-image">
        <div className="container">
          <div className="inner text-center">
            <h1 className="title">Sign in</h1>
            <nav className="mt-4">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Page</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Signin
                </li>
              </ol>
            </nav>
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End banner area */}
      {/* Start SignUp area */}
      <section className="signup-wrapper signin-wrapper ptb-120">
        <div className="container">
          <div className="row align-items-center gutter-0">
            <div className="col-xl-6 offset-xl-3 col-lg-12 ">
              <div className="signin-content">
                <div className="mb-6">
                  <h2 className="mb-2">Sign in NFTs</h2>
                  <p className="normal">
                    Welcome back! Please enter your details
                  </p>
                </div>
                {/* End top portion */}
                <form action="#" className="signin-form">
                  <div className="row">
                    <div className="col-md-12 mb-4">
                      <div className="field-box">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          id="email"
                          type="text"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>
                    {/* End .col */}
                    <div className="col-md-12 mb-4">
                      <div className="field-box">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <input
                          id="password"
                          type="password"
                          placeholder="Password"
                          required
                        />
                      </div>
                    </div>
                    {/* End .col */}
                    <div className="col-md-6 col-sm-6 mb-2">
                      <div className="field-box">
                        <label className="checkbox">
                          <input
                            className="form-check-input me-1"
                            type="checkbox"
                            defaultValue={''}
                            required
                          />
                          Remember for 30 days
                        </label>
                      </div>
                    </div>
                    {/* End .col */}
                    <div className="col-md-6 col-sm-6 mb-4">
                      <div className="field-box text-sm-end">
                        <a href="forgot-password.html">Forgot password</a>
                      </div>
                    </div>
                    {/* End .col */}
                    <div className="col-md-12 mb-4">
                      <div className="field-box">
                        <button
                          className="btn btn-gradient w-100 justify-content-center btn-medium"
                          type="submit"
                        >
                          <span>Sign In</span>
                        </button>
                      </div>
                    </div>
                    {/* End .col */}
                  </div>
                  {/* End .row */}
                  <div className="row justify-content-center text-center">
                    <div className="col-lg-12 mb-3">
                      <span>OR</span>
                    </div>
                    {/* End .col */}
                    <div className="col-lg-6 mb-4">
                      <a
                        href="#"
                        className="d-flex-center register-with metamask-btn"
                      >
                        <i>
                          <img
                            src="/assets/images/icon/metamask.svg"
                            alt="metamask"
                          />
                        </i>
                        <span>Sign in with Metamask</span>
                      </a>
                    </div>
                    {/* End .col */}
                    <div className="col-lg-6 mb-4">
                      <a
                        href="#"
                        className="d-flex-center register-with google-btn"
                      >
                        <i className="ri-google-fill" />
                        <span>Sign in with Google</span>
                      </a>
                    </div>
                    {/* End .col */}
                    <div className="col-lg-12">
                      Don&apos;t have an account?{' '}
                      <a href="signup.html" className="color-primary">
                        SignUp
                      </a>
                    </div>
                    {/* End .col */}
                  </div>
                </form>
                {/* End signin form */}
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End .signup-wrapper */}

      <ImportedScript
        srcs={[
          '/assets/js/vendor/jquery.js',
          '/assets/js/vendor/jquery.nice-select.min.js',
          '/assets/js/vendor/modernizer.min.js',
          '/assets/js/vendor/slick.min.js',
          '/assets/js/vendor/bootstrap.min.js',
          '/assets/js/vendor/waypoint.js',
          '/assets/js/vendor/js.cookie.js',
          '/assets/js/vendor/count-down.js',
          '/assets/js/vendor/counter-up.js',
          '/assets/js/vendor/isotop.js',
          '/assets/js/vendor/imageloaded.js',
          '/assets/js/vendor/jquery.custom-file-input.js',
          '/assets/js/main.js',
        ]}
      />
    </Main>
  );
};

export default LoginPage;

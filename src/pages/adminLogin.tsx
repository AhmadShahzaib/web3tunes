import { Meta } from '@/layouts/Meta';
import { useState } from 'react';
// import LoginForm from '../components/loginForm';
import axios from 'axios';

import { useRouter } from 'next/router';
import { Main } from '@/templates/Main';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const loginRequest = async () => {
    let body = {
      
        username: email,
        password: password
      
    }
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_HOST || ''}/auth/login`,body
    );
    debugger
    let token = res.data.token;
    localStorage.setItem('token', token);
    router.push('/mint')
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Perform login logic here, e.g., calling an API

    // Redirect to a different page on successful login
    router.push('/dashboard');
  };
  return (
    <Main
      meta={
        <Meta
          title="Web3tunes Marketplace App"
          description="Decentralized music application"
        />
      }
    >
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

      <section className="signup-wrapper signin-wrapper ptb-120">
        <div className="container">
          <div className="row align-items-center gutter-0">
            <div className="col-xl-6 offset-xl-3 col-lg-12 ">
              <div className="signin-content">
                <div className="mb-6">
                  <h2 className="mb-2">Admin Sign-In</h2>
                  </div>
                  <form onSubmit={handleSubmit}>
                <div className="col-md-12 mb-4">
                  <div className="field-box">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12 mb-4">
                  <div className="field-box">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      required
                    />
                  </div>
                </div>

                <div className="col-md-12 mb-4">
                      <div className="field-box">
                        <button
                          className="btn btn-gradient w-100 justify-content-center btn-medium"
                          type="submit"
                          onClick={loginRequest}
                        >
                          <span>Sign In</span>
                        </button>
                      </div>
                    </div>
              </form>
      </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
      </section>
    </Main>
  );
};

export default LoginPage;

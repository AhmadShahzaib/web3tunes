/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable tailwindcss/no-custom-classname */
import { Magic } from 'magic-sdk';
import React, { useState } from 'react';

import { formattedNetwork } from '@/libs/magic';
import { logout } from '@/utils/logout';

import { useUser } from '../contexts/UserContext';
import { useWeb3 } from '../contexts/Web3Context';
import { getWeb3 } from '../libs/web3';

export default function Header() {
  // const router = useRouter();

  const { user, setUser } = useUser();
  const { setWeb3 } = useWeb3();
  const [, setDisabled] = useState(false);
  console.log('USER: ', user);

  const connect = async () => {
    try {
      setDisabled(true);
      const magic = new Magic('pk_live_A42DBA0F3A5C362C' as string, {
        network: formattedNetwork(),
      });
      const accounts = await magic.wallet.connectWithUI();
      setDisabled(false);
      if (accounts[0]) {
        console.log('Logged in user:', accounts[0]);
        localStorage.setItem('user', accounts[0]);

        // Once user is logged in, re-initialize web3 instance to use the new provider (if connected with third party wallet)
        const web3 = await getWeb3();
        setWeb3(web3);
        setUser(accounts[0]);
      }
    } catch (error) {
      setDisabled(false);
      console.error(error);
    }
  };

  return (
    <header className="ib-header header-default header-fixed header--sticky fluid-header">
      <div className="header-inner d-flex align-items-center justify-content-between">
        <div className="header-left d-flex align-items-center">
          <div className="logo-wrapper">
            <a href="/" className="logo logo-light">
              <img src="/assets/images/logo-white.png" alt="brand" />{' '}
            </a>
            <a href="/" className="logo logo-dark">
              <img src="/assets/images/logo-dark.png" alt="brand" />{' '}
            </a>
          </div>
          {/* End .logo-wrapper */}
          <div className="mainmenu-wrapper">
            <nav id="sideNav" className="mainmenu-nav d-none d-xl-block">
              {/* Start Mainmanu Nav */}
              {/* <ul className="mainmenu">
                <li className="">
                  <a
                    className="active"
                    href="/"
                    // onClick={() => {
                    //   window.location.href = '/';
                    // }}
                  >
                    Home
                  </a>
                </li>
                <li className="">
                  <a
                    href="#"
                    onClick={() => {
                      window.location.href = '/library';
                    }}
                  >
                    Library
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => {
                      window.location.href = '/musicians';
                    }}
                  >
                    Musicians
                  </a>
                </li>
                <li className="">
                  <a
                    href="#"
                    onClick={() => {
                      window.location.href = '/activity';
                    }}
                  >
                    Activity
                  </a>
                </li>
                <li className="">
                  <a
                    href="#"
                    onClick={() => {
                      window.location.href = '/community';
                    }}
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => {
                      window.location.href = '/contact';
                    }}
                  >
                    Contact
                  </a>
                </li>
              </ul> */}
              {/* End Mainmanu Nav */}
            </nav>
          </div>
        </div>
        {/* End .header-left */}
        <div className="header-right d-flex align-items-center">
          <ul className="header-right-inner">
            <li className=" d-none d-lg-block">
              <form action="#" className="search-bar">
                <input
                  type="text"
                  name="search"
                  placeholder="Collection, item or user"
                  id="search"
                />
                <button className="search-btn" type="submit">
                  {' '}
                  <i className="ri-search-line" />
                </button>
              </form>
            </li>
            {/* End .search-bar */}
            <li className="setting-option d-block  d-lg-none ">
              <div className="icon-box search-mobile-icon">
                <button>
                  <i className="ri-search-line" />
                </button>
              </div>
              <form
                id="header-search-1"
                action="#"
                method="GET"
                className="large-mobile-blog-search search-bar"
              >
                <input
                  type="text"
                  name="search"
                  placeholder="Collection, item or user"
                  id="search_2"
                />
                <button className="search-btn" type="submit">
                  {' '}
                  <i className="ri-search-line" />
                </button>
              </form>
            </li>
            {/* End .search-mobile-icon */}
            <li className="wallet-button">
              {' '}
              {user ? (
                <a
                  href="#"
                  className="btn btn-gradient btn-small"
                  onClick={() => logout(setWeb3, setUser)}
                >
                  <span>
                    <i className="ri-wallet-3-line" />
                    Disconnect
                  </span>
                </a>
              ) : (
                <a
                  href="#"
                  className="btn btn-outline btn-small"
                  onClick={() => connect()}
                >
                  <span>
                    <i className="ri-wallet-3-line" />
                    Connect
                  </span>
                </a>
              )}
            </li>
            {/* End .wallet-button */}
            <li className="setting-option mobile-menu-bar d-block d-xl-none">
              <button className="hamberger-button">
                <i className="ri-menu-2-fill" />
              </button>
            </li>
            {/* End .mobile-menu-bar */}
            <li className="avatar-info">
              {' '}
              <a href="#">
                <img src="/assets/images/avatar/user.png" alt="user avatar" />
              </a>
              <ul className="submenu">
                <li>
                  <a href="author-profile.html">
                    <i className="ri-user-line" /> Profile
                  </a>
                </li>
                <li>
                  <a href="create.html">
                    <i className="ri-edit-line" /> Create Item
                  </a>
                </li>
                <li>
                  <a href="authors.html">
                    <i className="ri-layout-grid-line" />
                    Authors
                  </a>
                </li>
                <li>
                  <a href="signin.html">
                    <i className="ri-logout-box-r-line" />
                    Sign in
                  </a>
                </li>
              </ul>
            </li>
            {/* End .avatar-info */}
            <li>
              <label
                className="theme-switcher-label d-flex"
                htmlFor="theme-switcher"
              >
                <input
                  type="checkbox"
                  className="theme-switcher"
                  id="theme-switcher"
                />
                <div className="switch-handle">
                  <i className="ri-sun-line light-text" />
                  <i className="ri-moon-line dark-text" />
                </div>
              </label>
            </li>
            {/* End Dark & Light Swither */}
          </ul>
        </div>
        {/* End .header-left */}
      </div>
    </header>
  );
}

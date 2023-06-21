/* eslint-disable @next/next/no-sync-scripts */
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PreLoader from '@/components/PreLoader';
import { scriptPromise } from '@/utils/lib';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const loadScripts = async () => {
  if (window) {
    await scriptPromise('/assets/js/vendor/jquery.js');
    await scriptPromise('/assets/js/vendor/jquery.nice-select.min.js');
    await scriptPromise('/assets/js/vendor/modernizer.min.js');
    await scriptPromise('/assets/js/vendor/slick.min.js');
    await scriptPromise('/assets/js/vendor/bootstrap.min.js');
    await scriptPromise('/assets/js/vendor/waypoint.js');
    await scriptPromise('/assets/js/vendor/js.cookie.js');
    await scriptPromise('/assets/js/vendor/count-down.js');
    await scriptPromise('/assets/js/vendor/counter-up.js');
    await scriptPromise('/assets/js/vendor/isotop.js');
    await scriptPromise('/assets/js/vendor/imageloaded.js');
    await scriptPromise('/assets/js/vendor/aos.js');
    await scriptPromise('/assets/js/vendor/jquery.custom-file-input.js');
    await scriptPromise('/assets/js/main.js');
  }
};

const Main = (props: IMainProps) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (!loaded) {
      setTimeout(async () => {
        await loadScripts();
        setLoaded(true);
      }, 0);
    }
  }, [loaded]);

  return (
    <>
      {/* <Head>
        <script
          type="text/javascript"
          defer={true}
          src="/assets/js/vendor/jquery.js"
        ></script>
        <script
          type="text/javascript"
          defer={true}
          src="/assets/js/vendor/jquery.nice-select.min.js"
        ></script>
        <script
          type="text/javascript"
          defer={true}
          src="/assets/js/vendor/modernizer.min.js"
        ></script>
        <script
          type="text/javascript"
          defer={true}
          src="/assets/js/vendor/slick.min.js"
        ></script>
        <script
          type="text/javascript"
          defer={true}
          src="/assets/js/vendor/bootstrap.min.js"
        ></script>
        <script
          type="text/javascript"
          defer={true}
          src="/assets/js/vendor/waypoint.js"
        ></script>
        <script
          type="text/javascript"
          defer={true}
          src="/assets/js/vendor/js.cookie.js"
        ></script>
        <script
          type="text/javascript"
          defer={true}
          src="/assets/js/vendor/count-down.js"
        ></script>
        <script
          type="text/javascript"
          defer={true}
          src="/assets/js/vendor/counter-up.js"
        ></script>
        <script
          type="text/javascript"
          defer={true}
          src="/assets/js/vendor/isotop.js"
        ></script>
        <script
          type="text/javascript"
          defer={true}
          src="/assets/js/vendor/imageloaded.js"
        ></script>
        <script
          type="text/javascript"
          defer={true}
          src="/assets/js/vendor/aos.js"
        ></script>
        <script
          type="text/javascript"
          defer={true}
          src="/assets/js/vendor/jquery.custom-file-input.js"
        ></script>
        <script
          type="text/javascript"
          defer={true}
          src="/assets/js/main.js"
        ></script>
      </Head> */}
      {props.meta}
      <PreLoader />
      <Header />
      {/* <MobileMenu /> */}
      {props.children}
      <Footer />
    </>
  );
};

export { Main };

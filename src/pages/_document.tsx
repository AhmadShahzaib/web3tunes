/* eslint-disable @next/next/no-css-tags */
import Document, { Head, Html, Main, NextScript } from 'next/document';

import { AppConfig } from '@/utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <meta name="robots" content="noindex, follow" />
          <link rel="stylesheet" href="/assets/fonts/remixicon.css" />

          <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
          <link rel="stylesheet" href="/assets/css/vendor/slick.css" />
          <link rel="stylesheet" href="/assets/css/vendor/slick-theme.css" />
          <link rel="stylesheet" href="/assets/css/vendor/aos.css" />
          <link rel="stylesheet" href="/assets/css/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

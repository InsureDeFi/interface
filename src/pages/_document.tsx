import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />

          <meta name="image" content="https://insurefinance.xyz/twitter-card.jpg" />
          <link rel="icon" href="/insure.png" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="theme-color" content="#000000" />
          <link rel="apple-touch-icon" href="/insure.png" />

          <meta
            name="description"
            content="Fully-collateralized permission-less insurance protocol enabling users to hedge themselves against crypto market volatility."
          />

          <meta property="og:url" content="https://staging.insurefinance.xyz" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Fully-collateralized permission-less insurance protocol enabling users to hedge themselves against crypto market volatility."
          />
          <meta property="og:image" content="https://insurefinance.xyz/twitter-card.jpg" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="insurefinance.xyz" />
          <meta name="twitter:site" content="@insure_finance" />
          <meta property="twitter:url" content="https://staging.insurefinance.xyz" />
          <meta
            name="twitter:description"
            content="Fully-collateralized permission-less insurance protocol enabling users to hedge themselves against crypto market volatility."
          />
          <meta name="twitter:image" content="https://insurefinance.xyz/twitter-card.jpg" />
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

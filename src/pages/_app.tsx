import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import '@rainbow-me/rainbowkit/styles.css';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { connectorsForWallets, midnightTheme, RainbowKitProvider, Theme, wallet } from '@rainbow-me/rainbowkit';
import merge from 'lodash.merge';
import type { AppProps } from 'next/app';
import { X } from 'react-feather';
import { ToastContainer } from 'react-toastify';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

import Header from '@components/Header/Header';
import Navbar from '@components/Navbar/Navbar';
import Avatar from '@components/Avatar/Avatar';
import { getSupportedChains } from '@utils/networksConfig';

const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPH_URI,
  cache: new InMemoryCache(),
});

const supportedChains = getSupportedChains();

const { chains, provider } = configureChains(supportedChains, [
  jsonRpcProvider({
    rpc: (chain) => ({
      http: chain.rpcUrls.default,
    }),
  }),
]);

const needsInjectedWalletFallback =
  typeof window !== 'undefined' && window.ethereum && !window.ethereum.isMetaMask && !window.ethereum.isCoinbaseWallet;

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      wallet.metaMask({ chains }),
      wallet.walletConnect({ chains }),
      wallet.coinbase({ appName: 'Insure', chains }),
      wallet.brave({ chains }),
      wallet.imToken({ chains }),
      ...(needsInjectedWalletFallback ? [wallet.injected({ chains })] : []),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const appTheme = merge(midnightTheme(), {
  colors: {
    accentColor: '#1D4ED8',
    connectButtonBackground: '#18181B',
    modalBackground: '#18181B',
  },
  fonts: {
    body: 'DM Sans',
  },
  radii: {
    connectButton: '9999px',
  },
} as Theme);

function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        avatar={Avatar}
        appInfo={{ appName: 'Insure' }}
        chains={chains}
        theme={appTheme}
        showRecentTransactions
      >
        <ApolloProvider client={apolloClient}>
          <div
            className="min-h-screen"
            style={{
              background:
                'radial-gradient(150.6% 98.22% at 48.06% 0%, rgba(29, 78, 216, 0.6) 0%, rgba(200, 168, 255, 0) 100%), rgba(31, 33, 40, 0.85)',
              backgroundBlendMode: 'overlay, normal',
            }}
          >
            <Header />
            <div className="container mx-auto px-2 lg:px-4">
              <div className="flex justify-center pt-4 pb-20 md:pt-16 md:pb-0">
                <Component {...pageProps} />
              </div>
              <ToastContainer
                className="!w-[400px]"
                closeButton={({ closeToast }) => (
                  <div onClick={closeToast}>
                    <X className="h-5 text-gray-200" />
                  </div>
                )}
                theme="dark"
                autoClose={7000}
                pauseOnFocusLoss={false}
                closeOnClick={false}
                newestOnTop
              />
            </div>
            <div className="fixed bottom-4 block w-full lg:hidden">
              <Navbar />
            </div>
          </div>
        </ApolloProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;

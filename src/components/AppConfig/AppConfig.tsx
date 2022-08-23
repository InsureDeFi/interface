import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Avatar from '@components/Avatar/Avatar';
import { connectorsForWallets, midnightTheme, RainbowKitProvider, Theme, wallet } from '@rainbow-me/rainbowkit';
import { getSupportedChains } from '@utils/networksConfig';
import merge from 'lodash.merge';
import React from 'react';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

type Props = {
  children: React.ReactNode;
};

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

export default function AppConfig({ children }: Props) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        avatar={Avatar}
        appInfo={{ appName: 'Insure' }}
        chains={chains}
        theme={appTheme}
        showRecentTransactions
      >
        <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

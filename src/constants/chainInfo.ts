import { Chain } from '@rainbow-me/rainbowkit';
import CKB from '@images/ckb.svg';

export enum SupportedChainId {
  GODWOKEN_TESTNET = 71401,
}

export type ChainInfoMap = { readonly [chainId: number]: Chain };

export const CHAIN_INFO: ChainInfoMap = {
  [SupportedChainId.GODWOKEN_TESTNET]: {
    id: 71401,
    name: 'Godwoken Testnet v1',
    network: 'godwoken',
    nativeCurrency: { name: 'Common Knowledge Base', symbol: 'CKB', decimals: 18 },
    rpcUrls: { default: 'https://godwoken-testnet-v1.ckbapp.dev/' },
    blockExplorers: {
      etherscan: { name: 'GWScan', url: 'https://v1.betanet.gwscan.com' },
      default: { name: 'GWScan', url: 'https://v1.betanet.gwscan.com' },
    },
    testnet: true,
    iconUrl: CKB,
    iconBackground: '#fff',
  },
};

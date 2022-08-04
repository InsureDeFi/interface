import { ADDRESSES } from '@constants/addresses';
import { CHAIN_INFO } from '@constants/chainInfo';
import { Chain } from '@rainbow-me/rainbowkit';
import { TOKEN_SHORTHANDS } from '@constants/tokens';

export const STAGING_ENV = process.env.NEXT_PUBLIC_ENV === 'staging';

export function getDefaultChainId() {
  const supportedChains = getSupportedChains();
  return supportedChains[0].id;
}

export function getSupportedChains(): Chain[] {
  return Object.keys(CHAIN_INFO)
    .filter((value) => {
      const isTestnet = CHAIN_INFO[value as unknown as number].testnet;

      return STAGING_ENV ? isTestnet : !isTestnet;
    })
    .map((value) => CHAIN_INFO[value as unknown as number]);
}

export function getPoolAddress(chain?: Chain & { unsupported?: boolean | undefined }) {
  if (!chain || chain.unsupported) return ADDRESSES[getDefaultChainId()].RISK_POOL;
  return ADDRESSES[chain.id].RISK_POOL;
}

export function getUSDC(chain?: Chain & { unsupported?: boolean | undefined }) {
  if (!chain || chain.unsupported) return TOKEN_SHORTHANDS['USDC'][getDefaultChainId()];
  return TOKEN_SHORTHANDS['USDC'][chain.id];
}

export function getRINS(chain?: Chain & { unsupported?: boolean | undefined }) {
  if (!chain || chain.unsupported) return TOKEN_SHORTHANDS['RINS'][getDefaultChainId()];
  return TOKEN_SHORTHANDS['RINS'][chain.id];
}

export function chainToExplorerUrl(chain?: Chain & { unsupported?: boolean | undefined }): string | undefined {
  return chain?.blockExplorers?.default.url;
}

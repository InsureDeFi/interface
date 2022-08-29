import { SupportedChainId } from './chainInfo';

type AddressMap = { [chainId: number]: { RISK_POOL: string } };

export const ADDRESSES: AddressMap = {
  [SupportedChainId.GODWOKEN_TESTNET]: {
    RISK_POOL: '0x268fFA81C5668E8c918c7CFf2796edf8eBff7bFe',
  },
};

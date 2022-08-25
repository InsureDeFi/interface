import { SupportedChainId } from './chainInfo';

type AddressMap = { [chainId: number]: { RISK_POOL: string } };

export const ADDRESSES: AddressMap = {
  [SupportedChainId.GODWOKEN_TESTNET]: {
    RISK_POOL: '0xBfc2a16F2a07cDB7BCa46091156F638a0e2C25C6',
  },
};

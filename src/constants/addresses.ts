import { SupportedChainId } from './chainInfo';

type AddressMap = { [chainId: number]: { RISK_POOL: string } };

export const ADDRESSES: AddressMap = {
  [SupportedChainId.GODWOKEN_TESTNET]: {
    RISK_POOL: '0x67192F5F7eCD8CeF8eDB5fB89c6BC95351bBF4d7',
  },
};

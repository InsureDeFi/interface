import { validateAndParseAddress } from '@utils/validateAndParseAddress';
import { SupportedChainId } from './chainInfo';

export class Token {
  public readonly chainId: number;
  public readonly decimals: number;
  public readonly symbol: string;
  public readonly name: string;
  public readonly address: string;
  public readonly logo: string;

  constructor(chainId: number, address: string, decimals: number, symbol: string, name: string, logo: string) {
    this.chainId = chainId;
    this.decimals = decimals;
    this.symbol = symbol;
    this.name = name;
    this.address = validateAndParseAddress(address);
    this.logo = logo;
  }
}

export const SupportedAssets: { [asset: string]: { name: string; symbol: string; decimals: number; logo: string } } = {
  BTC: {
    name: 'Bitcoin',
    symbol: 'BTC',
    decimals: 8,
    logo: '@images/bitcoin.svg',
  },

  ETH: {
    name: 'Ethereum',
    symbol: 'ETH',
    logo: '@images/ethereum.svg',
    decimals: 18,
  },

  CKB: {
    name: 'Nervos Network',
    symbol: 'CKB',
    logo: '@images/ckb.svg',
    decimals: 8,
  },
};

export const USDC_GODWOKEN_TESTNET = new Token(
  SupportedChainId.GODWOKEN_TESTNET,
  '0xe78084E8910049908cB87000e972162FDad57689',
  6,
  'USDC',
  'USDCoin',
  '@images/usdcoin.svg'
);

export const RINS_GODWOKEN_TESTNET = new Token(
  SupportedChainId.GODWOKEN_TESTNET,
  '0x67192F5F7eCD8CeF8eDB5fB89c6BC95351bBF4d7',
  6,
  'rINS',
  'Insure LP Token',
  '@images/insure.svg'
);

export const TOKEN_SHORTHANDS: { [shorthand: string]: { [chainId: number]: Token } } = {
  USDC: {
    [SupportedChainId.GODWOKEN_TESTNET]: USDC_GODWOKEN_TESTNET,
  },
  RINS: {
    [SupportedChainId.GODWOKEN_TESTNET]: RINS_GODWOKEN_TESTNET,
  },
};

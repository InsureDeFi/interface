// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace InsureTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Asset = {
  id: Scalars['ID'];
  assetId: Scalars['BigInt'];
  symbol: Scalars['String'];
  volume: Scalars['BigDecimal'];
  txCount: Scalars['BigInt'];
  addedAtTimestamp: Scalars['BigInt'];
  addedAtBlockNumber: Scalars['BigInt'];
  policies: Array<Policy>;
  assetDayData: Array<AssetDayData>;
};


export type AssetpoliciesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Policy_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Policy_filter>;
};


export type AssetassetDayDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AssetDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AssetDayData_filter>;
};

export type AssetDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  asset: Asset;
  dailyVolume: Scalars['BigDecimal'];
  dailyTxns: Scalars['BigInt'];
};

export type AssetDayData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<Asset_filter>;
  dailyVolume?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTxns?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_not?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_gt?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_lt?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_gte?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_lte?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTxns_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type AssetDayData_orderBy =
  | 'id'
  | 'date'
  | 'asset'
  | 'dailyVolume'
  | 'dailyTxns';

export type Asset_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  assetId?: InputMaybe<Scalars['BigInt']>;
  assetId_not?: InputMaybe<Scalars['BigInt']>;
  assetId_gt?: InputMaybe<Scalars['BigInt']>;
  assetId_lt?: InputMaybe<Scalars['BigInt']>;
  assetId_gte?: InputMaybe<Scalars['BigInt']>;
  assetId_lte?: InputMaybe<Scalars['BigInt']>;
  assetId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  volume?: InputMaybe<Scalars['BigDecimal']>;
  volume_not?: InputMaybe<Scalars['BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  addedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  addedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  addedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  addedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  addedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  addedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  addedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  addedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  addedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  addedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  addedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  addedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  addedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  addedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  addedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  addedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  policies_?: InputMaybe<Policy_filter>;
  assetDayData_?: InputMaybe<AssetDayData_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Asset_orderBy =
  | 'id'
  | 'assetId'
  | 'symbol'
  | 'volume'
  | 'txCount'
  | 'addedAtTimestamp'
  | 'addedAtBlockNumber'
  | 'policies'
  | 'assetDayData';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Deposit = {
  id: Scalars['ID'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
  to: User;
  liquidityTokens: Scalars['BigDecimal'];
  caller: User;
  assets: Scalars['BigDecimal'];
};

export type Deposit_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_?: InputMaybe<User_filter>;
  liquidityTokens?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokens_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokens_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokens_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokens_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokens_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokens_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityTokens_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  caller?: InputMaybe<Scalars['String']>;
  caller_not?: InputMaybe<Scalars['String']>;
  caller_gt?: InputMaybe<Scalars['String']>;
  caller_lt?: InputMaybe<Scalars['String']>;
  caller_gte?: InputMaybe<Scalars['String']>;
  caller_lte?: InputMaybe<Scalars['String']>;
  caller_in?: InputMaybe<Array<Scalars['String']>>;
  caller_not_in?: InputMaybe<Array<Scalars['String']>>;
  caller_contains?: InputMaybe<Scalars['String']>;
  caller_contains_nocase?: InputMaybe<Scalars['String']>;
  caller_not_contains?: InputMaybe<Scalars['String']>;
  caller_not_contains_nocase?: InputMaybe<Scalars['String']>;
  caller_starts_with?: InputMaybe<Scalars['String']>;
  caller_starts_with_nocase?: InputMaybe<Scalars['String']>;
  caller_not_starts_with?: InputMaybe<Scalars['String']>;
  caller_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  caller_ends_with?: InputMaybe<Scalars['String']>;
  caller_ends_with_nocase?: InputMaybe<Scalars['String']>;
  caller_not_ends_with?: InputMaybe<Scalars['String']>;
  caller_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  caller_?: InputMaybe<User_filter>;
  assets?: InputMaybe<Scalars['BigDecimal']>;
  assets_not?: InputMaybe<Scalars['BigDecimal']>;
  assets_gt?: InputMaybe<Scalars['BigDecimal']>;
  assets_lt?: InputMaybe<Scalars['BigDecimal']>;
  assets_gte?: InputMaybe<Scalars['BigDecimal']>;
  assets_lte?: InputMaybe<Scalars['BigDecimal']>;
  assets_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  assets_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Deposit_orderBy =
  | 'id'
  | 'transaction'
  | 'timestamp'
  | 'to'
  | 'liquidityTokens'
  | 'caller'
  | 'assets';

export type LiquidityPosition = {
  id: Scalars['ID'];
  user: User;
  shares: Scalars['BigDecimal'];
};

export type LiquidityPositionSnapshot = {
  id: Scalars['ID'];
  liquidityPosition: LiquidityPosition;
  timestamp: Scalars['Int'];
  block: Scalars['Int'];
  user: User;
  totalAssets: Scalars['BigDecimal'];
  availableAssets: Scalars['BigDecimal'];
  lockedAssets: Scalars['BigDecimal'];
  sharesTotalSupply: Scalars['BigDecimal'];
  shares: Scalars['BigDecimal'];
};

export type LiquidityPositionSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  liquidityPosition?: InputMaybe<Scalars['String']>;
  liquidityPosition_not?: InputMaybe<Scalars['String']>;
  liquidityPosition_gt?: InputMaybe<Scalars['String']>;
  liquidityPosition_lt?: InputMaybe<Scalars['String']>;
  liquidityPosition_gte?: InputMaybe<Scalars['String']>;
  liquidityPosition_lte?: InputMaybe<Scalars['String']>;
  liquidityPosition_in?: InputMaybe<Array<Scalars['String']>>;
  liquidityPosition_not_in?: InputMaybe<Array<Scalars['String']>>;
  liquidityPosition_contains?: InputMaybe<Scalars['String']>;
  liquidityPosition_contains_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_contains?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_contains_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_starts_with?: InputMaybe<Scalars['String']>;
  liquidityPosition_starts_with_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_starts_with?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_ends_with?: InputMaybe<Scalars['String']>;
  liquidityPosition_ends_with_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_ends_with?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_?: InputMaybe<LiquidityPosition_filter>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  block?: InputMaybe<Scalars['Int']>;
  block_not?: InputMaybe<Scalars['Int']>;
  block_gt?: InputMaybe<Scalars['Int']>;
  block_lt?: InputMaybe<Scalars['Int']>;
  block_gte?: InputMaybe<Scalars['Int']>;
  block_lte?: InputMaybe<Scalars['Int']>;
  block_in?: InputMaybe<Array<Scalars['Int']>>;
  block_not_in?: InputMaybe<Array<Scalars['Int']>>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  totalAssets?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_not?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  availableAssets?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_not?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_gt?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_lt?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_gte?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_lte?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  availableAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lockedAssets?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_not?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_gt?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_lt?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_gte?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_lte?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lockedAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sharesTotalSupply?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_not?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_gt?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_lt?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_gte?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_lte?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sharesTotalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  shares?: InputMaybe<Scalars['BigDecimal']>;
  shares_not?: InputMaybe<Scalars['BigDecimal']>;
  shares_gt?: InputMaybe<Scalars['BigDecimal']>;
  shares_lt?: InputMaybe<Scalars['BigDecimal']>;
  shares_gte?: InputMaybe<Scalars['BigDecimal']>;
  shares_lte?: InputMaybe<Scalars['BigDecimal']>;
  shares_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  shares_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type LiquidityPositionSnapshot_orderBy =
  | 'id'
  | 'liquidityPosition'
  | 'timestamp'
  | 'block'
  | 'user'
  | 'totalAssets'
  | 'availableAssets'
  | 'lockedAssets'
  | 'sharesTotalSupply'
  | 'shares';

export type LiquidityPosition_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  shares?: InputMaybe<Scalars['BigDecimal']>;
  shares_not?: InputMaybe<Scalars['BigDecimal']>;
  shares_gt?: InputMaybe<Scalars['BigDecimal']>;
  shares_lt?: InputMaybe<Scalars['BigDecimal']>;
  shares_gte?: InputMaybe<Scalars['BigDecimal']>;
  shares_lte?: InputMaybe<Scalars['BigDecimal']>;
  shares_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  shares_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type LiquidityPosition_orderBy =
  | 'id'
  | 'user'
  | 'shares';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Policy = {
  id: Scalars['ID'];
  transaction: Transaction;
  asset: Asset;
  assetPrice: Scalars['BigDecimal'];
  insured: User;
  payOutAmount: Scalars['BigDecimal'];
  premium: Scalars['BigDecimal'];
  startTime: Scalars['BigInt'];
  endTime: Scalars['BigInt'];
  threshold: Scalars['Int'];
  utilized: Scalars['Boolean'];
};

export type Policy_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<Asset_filter>;
  assetPrice?: InputMaybe<Scalars['BigDecimal']>;
  assetPrice_not?: InputMaybe<Scalars['BigDecimal']>;
  assetPrice_gt?: InputMaybe<Scalars['BigDecimal']>;
  assetPrice_lt?: InputMaybe<Scalars['BigDecimal']>;
  assetPrice_gte?: InputMaybe<Scalars['BigDecimal']>;
  assetPrice_lte?: InputMaybe<Scalars['BigDecimal']>;
  assetPrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  assetPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  insured?: InputMaybe<Scalars['String']>;
  insured_not?: InputMaybe<Scalars['String']>;
  insured_gt?: InputMaybe<Scalars['String']>;
  insured_lt?: InputMaybe<Scalars['String']>;
  insured_gte?: InputMaybe<Scalars['String']>;
  insured_lte?: InputMaybe<Scalars['String']>;
  insured_in?: InputMaybe<Array<Scalars['String']>>;
  insured_not_in?: InputMaybe<Array<Scalars['String']>>;
  insured_contains?: InputMaybe<Scalars['String']>;
  insured_contains_nocase?: InputMaybe<Scalars['String']>;
  insured_not_contains?: InputMaybe<Scalars['String']>;
  insured_not_contains_nocase?: InputMaybe<Scalars['String']>;
  insured_starts_with?: InputMaybe<Scalars['String']>;
  insured_starts_with_nocase?: InputMaybe<Scalars['String']>;
  insured_not_starts_with?: InputMaybe<Scalars['String']>;
  insured_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  insured_ends_with?: InputMaybe<Scalars['String']>;
  insured_ends_with_nocase?: InputMaybe<Scalars['String']>;
  insured_not_ends_with?: InputMaybe<Scalars['String']>;
  insured_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  insured_?: InputMaybe<User_filter>;
  payOutAmount?: InputMaybe<Scalars['BigDecimal']>;
  payOutAmount_not?: InputMaybe<Scalars['BigDecimal']>;
  payOutAmount_gt?: InputMaybe<Scalars['BigDecimal']>;
  payOutAmount_lt?: InputMaybe<Scalars['BigDecimal']>;
  payOutAmount_gte?: InputMaybe<Scalars['BigDecimal']>;
  payOutAmount_lte?: InputMaybe<Scalars['BigDecimal']>;
  payOutAmount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  payOutAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  premium?: InputMaybe<Scalars['BigDecimal']>;
  premium_not?: InputMaybe<Scalars['BigDecimal']>;
  premium_gt?: InputMaybe<Scalars['BigDecimal']>;
  premium_lt?: InputMaybe<Scalars['BigDecimal']>;
  premium_gte?: InputMaybe<Scalars['BigDecimal']>;
  premium_lte?: InputMaybe<Scalars['BigDecimal']>;
  premium_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  premium_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  startTime?: InputMaybe<Scalars['BigInt']>;
  startTime_not?: InputMaybe<Scalars['BigInt']>;
  startTime_gt?: InputMaybe<Scalars['BigInt']>;
  startTime_lt?: InputMaybe<Scalars['BigInt']>;
  startTime_gte?: InputMaybe<Scalars['BigInt']>;
  startTime_lte?: InputMaybe<Scalars['BigInt']>;
  startTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endTime?: InputMaybe<Scalars['BigInt']>;
  endTime_not?: InputMaybe<Scalars['BigInt']>;
  endTime_gt?: InputMaybe<Scalars['BigInt']>;
  endTime_lt?: InputMaybe<Scalars['BigInt']>;
  endTime_gte?: InputMaybe<Scalars['BigInt']>;
  endTime_lte?: InputMaybe<Scalars['BigInt']>;
  endTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  threshold?: InputMaybe<Scalars['Int']>;
  threshold_not?: InputMaybe<Scalars['Int']>;
  threshold_gt?: InputMaybe<Scalars['Int']>;
  threshold_lt?: InputMaybe<Scalars['Int']>;
  threshold_gte?: InputMaybe<Scalars['Int']>;
  threshold_lte?: InputMaybe<Scalars['Int']>;
  threshold_in?: InputMaybe<Array<Scalars['Int']>>;
  threshold_not_in?: InputMaybe<Array<Scalars['Int']>>;
  utilized?: InputMaybe<Scalars['Boolean']>;
  utilized_not?: InputMaybe<Scalars['Boolean']>;
  utilized_in?: InputMaybe<Array<Scalars['Boolean']>>;
  utilized_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Policy_orderBy =
  | 'id'
  | 'transaction'
  | 'asset'
  | 'assetPrice'
  | 'insured'
  | 'payOutAmount'
  | 'premium'
  | 'startTime'
  | 'endTime'
  | 'threshold'
  | 'utilized';

export type Pool = {
  id: Scalars['ID'];
  totalVolume: Scalars['BigDecimal'];
  utilizationRate: Scalars['BigDecimal'];
  policyCount: Scalars['BigInt'];
  txCount: Scalars['BigInt'];
  totalAssets: Scalars['BigDecimal'];
  availableAssets: Scalars['BigDecimal'];
  lockedAssets: Scalars['BigDecimal'];
  sharesTotalSupply: Scalars['BigDecimal'];
  liquidityProviderCount: Scalars['BigInt'];
};

export type PoolDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  dailyVolume: Scalars['BigDecimal'];
  totalVolume: Scalars['BigDecimal'];
  protocolFee: Scalars['BigDecimal'];
  totalAssets: Scalars['BigDecimal'];
  availableAssets: Scalars['BigDecimal'];
  lockedAssets: Scalars['BigDecimal'];
  txCount: Scalars['BigInt'];
  sharesTotalSupply: Scalars['BigDecimal'];
};

export type PoolDayData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyVolume?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolume?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  protocolFee?: InputMaybe<Scalars['BigDecimal']>;
  protocolFee_not?: InputMaybe<Scalars['BigDecimal']>;
  protocolFee_gt?: InputMaybe<Scalars['BigDecimal']>;
  protocolFee_lt?: InputMaybe<Scalars['BigDecimal']>;
  protocolFee_gte?: InputMaybe<Scalars['BigDecimal']>;
  protocolFee_lte?: InputMaybe<Scalars['BigDecimal']>;
  protocolFee_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  protocolFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalAssets?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_not?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  availableAssets?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_not?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_gt?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_lt?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_gte?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_lte?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  availableAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lockedAssets?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_not?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_gt?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_lt?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_gte?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_lte?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lockedAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sharesTotalSupply?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_not?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_gt?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_lt?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_gte?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_lte?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sharesTotalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type PoolDayData_orderBy =
  | 'id'
  | 'date'
  | 'dailyVolume'
  | 'totalVolume'
  | 'protocolFee'
  | 'totalAssets'
  | 'availableAssets'
  | 'lockedAssets'
  | 'txCount'
  | 'sharesTotalSupply';

export type PoolHourData = {
  id: Scalars['ID'];
  hourStartUnix: Scalars['Int'];
  totalAssets: Scalars['BigDecimal'];
  availableAssets: Scalars['BigDecimal'];
  lockedAssets: Scalars['BigDecimal'];
  sharesTotalSupply: Scalars['BigDecimal'];
  hourlyVolume: Scalars['BigDecimal'];
  hourlyTxns: Scalars['BigInt'];
};

export type PoolHourData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hourStartUnix?: InputMaybe<Scalars['Int']>;
  hourStartUnix_not?: InputMaybe<Scalars['Int']>;
  hourStartUnix_gt?: InputMaybe<Scalars['Int']>;
  hourStartUnix_lt?: InputMaybe<Scalars['Int']>;
  hourStartUnix_gte?: InputMaybe<Scalars['Int']>;
  hourStartUnix_lte?: InputMaybe<Scalars['Int']>;
  hourStartUnix_in?: InputMaybe<Array<Scalars['Int']>>;
  hourStartUnix_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalAssets?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_not?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  availableAssets?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_not?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_gt?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_lt?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_gte?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_lte?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  availableAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lockedAssets?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_not?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_gt?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_lt?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_gte?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_lte?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lockedAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sharesTotalSupply?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_not?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_gt?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_lt?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_gte?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_lte?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sharesTotalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyVolume?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyTxns?: InputMaybe<Scalars['BigInt']>;
  hourlyTxns_not?: InputMaybe<Scalars['BigInt']>;
  hourlyTxns_gt?: InputMaybe<Scalars['BigInt']>;
  hourlyTxns_lt?: InputMaybe<Scalars['BigInt']>;
  hourlyTxns_gte?: InputMaybe<Scalars['BigInt']>;
  hourlyTxns_lte?: InputMaybe<Scalars['BigInt']>;
  hourlyTxns_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hourlyTxns_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type PoolHourData_orderBy =
  | 'id'
  | 'hourStartUnix'
  | 'totalAssets'
  | 'availableAssets'
  | 'lockedAssets'
  | 'sharesTotalSupply'
  | 'hourlyVolume'
  | 'hourlyTxns';

export type Pool_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  totalVolume?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  utilizationRate?: InputMaybe<Scalars['BigDecimal']>;
  utilizationRate_not?: InputMaybe<Scalars['BigDecimal']>;
  utilizationRate_gt?: InputMaybe<Scalars['BigDecimal']>;
  utilizationRate_lt?: InputMaybe<Scalars['BigDecimal']>;
  utilizationRate_gte?: InputMaybe<Scalars['BigDecimal']>;
  utilizationRate_lte?: InputMaybe<Scalars['BigDecimal']>;
  utilizationRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  utilizationRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  policyCount?: InputMaybe<Scalars['BigInt']>;
  policyCount_not?: InputMaybe<Scalars['BigInt']>;
  policyCount_gt?: InputMaybe<Scalars['BigInt']>;
  policyCount_lt?: InputMaybe<Scalars['BigInt']>;
  policyCount_gte?: InputMaybe<Scalars['BigInt']>;
  policyCount_lte?: InputMaybe<Scalars['BigInt']>;
  policyCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  policyCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAssets?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_not?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  availableAssets?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_not?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_gt?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_lt?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_gte?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_lte?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  availableAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lockedAssets?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_not?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_gt?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_lt?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_gte?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_lte?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lockedAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sharesTotalSupply?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_not?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_gt?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_lt?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_gte?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_lte?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sharesTotalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityProviderCount?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_not?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityProviderCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Pool_orderBy =
  | 'id'
  | 'totalVolume'
  | 'utilizationRate'
  | 'policyCount'
  | 'txCount'
  | 'totalAssets'
  | 'availableAssets'
  | 'lockedAssets'
  | 'sharesTotalSupply'
  | 'liquidityProviderCount';

export type Query = {
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  asset?: Maybe<Asset>;
  assets: Array<Asset>;
  policy?: Maybe<Policy>;
  policies: Array<Policy>;
  user?: Maybe<User>;
  users: Array<User>;
  liquidityPosition?: Maybe<LiquidityPosition>;
  liquidityPositions: Array<LiquidityPosition>;
  liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>;
  liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  withdraw?: Maybe<Withdraw>;
  withdraws: Array<Withdraw>;
  poolHourData?: Maybe<PoolHourData>;
  poolHourDatas: Array<PoolHourData>;
  poolDayData?: Maybe<PoolDayData>;
  poolDayDatas: Array<PoolDayData>;
  assetDayData?: Maybe<AssetDayData>;
  assetDayDatas: Array<AssetDayData>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerypoolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryassetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryassetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Asset_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Asset_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypolicyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoliciesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Policy_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Policy_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPositionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPosition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPositionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPositionSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydepositArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywithdrawArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdraw_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdraw_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolHourData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolHourData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryassetDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryassetDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AssetDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AssetDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  asset?: Maybe<Asset>;
  assets: Array<Asset>;
  policy?: Maybe<Policy>;
  policies: Array<Policy>;
  user?: Maybe<User>;
  users: Array<User>;
  liquidityPosition?: Maybe<LiquidityPosition>;
  liquidityPositions: Array<LiquidityPosition>;
  liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>;
  liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  withdraw?: Maybe<Withdraw>;
  withdraws: Array<Withdraw>;
  poolHourData?: Maybe<PoolHourData>;
  poolHourDatas: Array<PoolHourData>;
  poolDayData?: Maybe<PoolDayData>;
  poolDayDatas: Array<PoolDayData>;
  assetDayData?: Maybe<AssetDayData>;
  assetDayDatas: Array<AssetDayData>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionpoolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionassetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionassetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Asset_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Asset_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpolicyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoliciesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Policy_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Policy_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPositionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPosition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPositionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPositionSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondepositArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwithdrawArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdraw_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdraw_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolHourData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolHourData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionassetDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionassetDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AssetDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AssetDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Transaction = {
  id: Scalars['ID'];
  blockNumber: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  deposits: Array<Deposit>;
  withdrawals: Array<Withdraw>;
  policies: Array<Policy>;
};


export type TransactiondepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
};


export type TransactionwithdrawalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdraw_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdraw_filter>;
};


export type TransactionpoliciesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Policy_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Policy_filter>;
};

export type Transaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposits?: InputMaybe<Array<Scalars['String']>>;
  deposits_not?: InputMaybe<Array<Scalars['String']>>;
  deposits_contains?: InputMaybe<Array<Scalars['String']>>;
  deposits_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  deposits_not_contains?: InputMaybe<Array<Scalars['String']>>;
  deposits_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  deposits_?: InputMaybe<Deposit_filter>;
  withdrawals?: InputMaybe<Array<Scalars['String']>>;
  withdrawals_not?: InputMaybe<Array<Scalars['String']>>;
  withdrawals_contains?: InputMaybe<Array<Scalars['String']>>;
  withdrawals_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  withdrawals_not_contains?: InputMaybe<Array<Scalars['String']>>;
  withdrawals_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  withdrawals_?: InputMaybe<Withdraw_filter>;
  policies?: InputMaybe<Array<Scalars['String']>>;
  policies_not?: InputMaybe<Array<Scalars['String']>>;
  policies_contains?: InputMaybe<Array<Scalars['String']>>;
  policies_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  policies_not_contains?: InputMaybe<Array<Scalars['String']>>;
  policies_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  policies_?: InputMaybe<Policy_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Transaction_orderBy =
  | 'id'
  | 'blockNumber'
  | 'timestamp'
  | 'deposits'
  | 'withdrawals'
  | 'policies';

export type User = {
  id: Scalars['ID'];
  policyCount: Scalars['BigInt'];
  premiumPaid: Scalars['BigDecimal'];
  policies: Array<Policy>;
  liquidityPositions?: Maybe<Array<LiquidityPosition>>;
};


export type UserpoliciesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Policy_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Policy_filter>;
};


export type UserliquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPosition_filter>;
};

export type User_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  policyCount?: InputMaybe<Scalars['BigInt']>;
  policyCount_not?: InputMaybe<Scalars['BigInt']>;
  policyCount_gt?: InputMaybe<Scalars['BigInt']>;
  policyCount_lt?: InputMaybe<Scalars['BigInt']>;
  policyCount_gte?: InputMaybe<Scalars['BigInt']>;
  policyCount_lte?: InputMaybe<Scalars['BigInt']>;
  policyCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  policyCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  premiumPaid?: InputMaybe<Scalars['BigDecimal']>;
  premiumPaid_not?: InputMaybe<Scalars['BigDecimal']>;
  premiumPaid_gt?: InputMaybe<Scalars['BigDecimal']>;
  premiumPaid_lt?: InputMaybe<Scalars['BigDecimal']>;
  premiumPaid_gte?: InputMaybe<Scalars['BigDecimal']>;
  premiumPaid_lte?: InputMaybe<Scalars['BigDecimal']>;
  premiumPaid_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  premiumPaid_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  policies_?: InputMaybe<Policy_filter>;
  liquidityPositions_?: InputMaybe<LiquidityPosition_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type User_orderBy =
  | 'id'
  | 'policyCount'
  | 'premiumPaid'
  | 'policies'
  | 'liquidityPositions';

export type Withdraw = {
  id: Scalars['ID'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
  to: User;
  liquidityTokens: Scalars['BigDecimal'];
  owner: User;
  caller: User;
  assets: Scalars['BigDecimal'];
};

export type Withdraw_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_?: InputMaybe<User_filter>;
  liquidityTokens?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokens_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokens_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokens_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokens_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokens_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokens_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityTokens_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<User_filter>;
  caller?: InputMaybe<Scalars['String']>;
  caller_not?: InputMaybe<Scalars['String']>;
  caller_gt?: InputMaybe<Scalars['String']>;
  caller_lt?: InputMaybe<Scalars['String']>;
  caller_gte?: InputMaybe<Scalars['String']>;
  caller_lte?: InputMaybe<Scalars['String']>;
  caller_in?: InputMaybe<Array<Scalars['String']>>;
  caller_not_in?: InputMaybe<Array<Scalars['String']>>;
  caller_contains?: InputMaybe<Scalars['String']>;
  caller_contains_nocase?: InputMaybe<Scalars['String']>;
  caller_not_contains?: InputMaybe<Scalars['String']>;
  caller_not_contains_nocase?: InputMaybe<Scalars['String']>;
  caller_starts_with?: InputMaybe<Scalars['String']>;
  caller_starts_with_nocase?: InputMaybe<Scalars['String']>;
  caller_not_starts_with?: InputMaybe<Scalars['String']>;
  caller_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  caller_ends_with?: InputMaybe<Scalars['String']>;
  caller_ends_with_nocase?: InputMaybe<Scalars['String']>;
  caller_not_ends_with?: InputMaybe<Scalars['String']>;
  caller_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  caller_?: InputMaybe<User_filter>;
  assets?: InputMaybe<Scalars['BigDecimal']>;
  assets_not?: InputMaybe<Scalars['BigDecimal']>;
  assets_gt?: InputMaybe<Scalars['BigDecimal']>;
  assets_lt?: InputMaybe<Scalars['BigDecimal']>;
  assets_gte?: InputMaybe<Scalars['BigDecimal']>;
  assets_lte?: InputMaybe<Scalars['BigDecimal']>;
  assets_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  assets_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Withdraw_orderBy =
  | 'id'
  | 'transaction'
  | 'timestamp'
  | 'to'
  | 'liquidityTokens'
  | 'owner'
  | 'caller'
  | 'assets';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  pool: InContextSdkMethod<Query['pool'], QuerypoolArgs, MeshContext>,
  /** null **/
  pools: InContextSdkMethod<Query['pools'], QuerypoolsArgs, MeshContext>,
  /** null **/
  asset: InContextSdkMethod<Query['asset'], QueryassetArgs, MeshContext>,
  /** null **/
  assets: InContextSdkMethod<Query['assets'], QueryassetsArgs, MeshContext>,
  /** null **/
  policy: InContextSdkMethod<Query['policy'], QuerypolicyArgs, MeshContext>,
  /** null **/
  policies: InContextSdkMethod<Query['policies'], QuerypoliciesArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Query['user'], QueryuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Query['users'], QueryusersArgs, MeshContext>,
  /** null **/
  liquidityPosition: InContextSdkMethod<Query['liquidityPosition'], QueryliquidityPositionArgs, MeshContext>,
  /** null **/
  liquidityPositions: InContextSdkMethod<Query['liquidityPositions'], QueryliquidityPositionsArgs, MeshContext>,
  /** null **/
  liquidityPositionSnapshot: InContextSdkMethod<Query['liquidityPositionSnapshot'], QueryliquidityPositionSnapshotArgs, MeshContext>,
  /** null **/
  liquidityPositionSnapshots: InContextSdkMethod<Query['liquidityPositionSnapshots'], QueryliquidityPositionSnapshotsArgs, MeshContext>,
  /** null **/
  transaction: InContextSdkMethod<Query['transaction'], QuerytransactionArgs, MeshContext>,
  /** null **/
  transactions: InContextSdkMethod<Query['transactions'], QuerytransactionsArgs, MeshContext>,
  /** null **/
  deposit: InContextSdkMethod<Query['deposit'], QuerydepositArgs, MeshContext>,
  /** null **/
  deposits: InContextSdkMethod<Query['deposits'], QuerydepositsArgs, MeshContext>,
  /** null **/
  withdraw: InContextSdkMethod<Query['withdraw'], QuerywithdrawArgs, MeshContext>,
  /** null **/
  withdraws: InContextSdkMethod<Query['withdraws'], QuerywithdrawsArgs, MeshContext>,
  /** null **/
  poolHourData: InContextSdkMethod<Query['poolHourData'], QuerypoolHourDataArgs, MeshContext>,
  /** null **/
  poolHourDatas: InContextSdkMethod<Query['poolHourDatas'], QuerypoolHourDatasArgs, MeshContext>,
  /** null **/
  poolDayData: InContextSdkMethod<Query['poolDayData'], QuerypoolDayDataArgs, MeshContext>,
  /** null **/
  poolDayDatas: InContextSdkMethod<Query['poolDayDatas'], QuerypoolDayDatasArgs, MeshContext>,
  /** null **/
  assetDayData: InContextSdkMethod<Query['assetDayData'], QueryassetDayDataArgs, MeshContext>,
  /** null **/
  assetDayDatas: InContextSdkMethod<Query['assetDayDatas'], QueryassetDayDatasArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  pool: InContextSdkMethod<Subscription['pool'], SubscriptionpoolArgs, MeshContext>,
  /** null **/
  pools: InContextSdkMethod<Subscription['pools'], SubscriptionpoolsArgs, MeshContext>,
  /** null **/
  asset: InContextSdkMethod<Subscription['asset'], SubscriptionassetArgs, MeshContext>,
  /** null **/
  assets: InContextSdkMethod<Subscription['assets'], SubscriptionassetsArgs, MeshContext>,
  /** null **/
  policy: InContextSdkMethod<Subscription['policy'], SubscriptionpolicyArgs, MeshContext>,
  /** null **/
  policies: InContextSdkMethod<Subscription['policies'], SubscriptionpoliciesArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Subscription['user'], SubscriptionuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Subscription['users'], SubscriptionusersArgs, MeshContext>,
  /** null **/
  liquidityPosition: InContextSdkMethod<Subscription['liquidityPosition'], SubscriptionliquidityPositionArgs, MeshContext>,
  /** null **/
  liquidityPositions: InContextSdkMethod<Subscription['liquidityPositions'], SubscriptionliquidityPositionsArgs, MeshContext>,
  /** null **/
  liquidityPositionSnapshot: InContextSdkMethod<Subscription['liquidityPositionSnapshot'], SubscriptionliquidityPositionSnapshotArgs, MeshContext>,
  /** null **/
  liquidityPositionSnapshots: InContextSdkMethod<Subscription['liquidityPositionSnapshots'], SubscriptionliquidityPositionSnapshotsArgs, MeshContext>,
  /** null **/
  transaction: InContextSdkMethod<Subscription['transaction'], SubscriptiontransactionArgs, MeshContext>,
  /** null **/
  transactions: InContextSdkMethod<Subscription['transactions'], SubscriptiontransactionsArgs, MeshContext>,
  /** null **/
  deposit: InContextSdkMethod<Subscription['deposit'], SubscriptiondepositArgs, MeshContext>,
  /** null **/
  deposits: InContextSdkMethod<Subscription['deposits'], SubscriptiondepositsArgs, MeshContext>,
  /** null **/
  withdraw: InContextSdkMethod<Subscription['withdraw'], SubscriptionwithdrawArgs, MeshContext>,
  /** null **/
  withdraws: InContextSdkMethod<Subscription['withdraws'], SubscriptionwithdrawsArgs, MeshContext>,
  /** null **/
  poolHourData: InContextSdkMethod<Subscription['poolHourData'], SubscriptionpoolHourDataArgs, MeshContext>,
  /** null **/
  poolHourDatas: InContextSdkMethod<Subscription['poolHourDatas'], SubscriptionpoolHourDatasArgs, MeshContext>,
  /** null **/
  poolDayData: InContextSdkMethod<Subscription['poolDayData'], SubscriptionpoolDayDataArgs, MeshContext>,
  /** null **/
  poolDayDatas: InContextSdkMethod<Subscription['poolDayDatas'], SubscriptionpoolDayDatasArgs, MeshContext>,
  /** null **/
  assetDayData: InContextSdkMethod<Subscription['assetDayData'], SubscriptionassetDayDataArgs, MeshContext>,
  /** null **/
  assetDayDatas: InContextSdkMethod<Subscription['assetDayDatas'], SubscriptionassetDayDatasArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["insure"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}

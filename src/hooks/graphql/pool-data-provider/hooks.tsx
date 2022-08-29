/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: string;
  BigInt: string;
  Bytes: any;
};

export type Asset = {
  __typename?: 'Asset';
  addedAtBlockNumber: Scalars['BigInt'];
  addedAtTimestamp: Scalars['BigInt'];
  assetDayData: Array<AssetDayData>;
  assetId: Scalars['BigInt'];
  id: Scalars['ID'];
  policies: Array<Policy>;
  symbol: Scalars['String'];
  txCount: Scalars['BigInt'];
  volume: Scalars['BigDecimal'];
};

export type AssetAssetDayDataArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AssetDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetDayData_Filter>;
};

export type AssetPoliciesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Policy_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Policy_Filter>;
};

export type AssetDayData = {
  __typename?: 'AssetDayData';
  asset: Asset;
  dailyTxns: Scalars['BigInt'];
  dailyVolume: Scalars['BigDecimal'];
  date: Scalars['Int'];
  id: Scalars['ID'];
};

export type AssetDayData_Filter = {
  asset?: InputMaybe<Scalars['String']>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dailyTxns?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_gt?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_gte?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTxns_lt?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_lte?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_not?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyVolume?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

export enum AssetDayData_OrderBy {
  Asset = 'asset',
  DailyTxns = 'dailyTxns',
  DailyVolume = 'dailyVolume',
  Date = 'date',
  Id = 'id',
}

export type Asset_Filter = {
  addedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  addedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  addedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  addedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  addedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  addedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  addedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  addedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  addedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  addedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  addedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  addedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  addedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  addedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  addedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  addedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetId?: InputMaybe<Scalars['BigInt']>;
  assetId_gt?: InputMaybe<Scalars['BigInt']>;
  assetId_gte?: InputMaybe<Scalars['BigInt']>;
  assetId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetId_lt?: InputMaybe<Scalars['BigInt']>;
  assetId_lte?: InputMaybe<Scalars['BigInt']>;
  assetId_not?: InputMaybe<Scalars['BigInt']>;
  assetId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume?: InputMaybe<Scalars['BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volume_lt?: InputMaybe<Scalars['BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['BigDecimal']>;
  volume_not?: InputMaybe<Scalars['BigDecimal']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export enum Asset_OrderBy {
  AddedAtBlockNumber = 'addedAtBlockNumber',
  AddedAtTimestamp = 'addedAtTimestamp',
  AssetDayData = 'assetDayData',
  AssetId = 'assetId',
  Id = 'id',
  Policies = 'policies',
  Symbol = 'symbol',
  TxCount = 'txCount',
  Volume = 'volume',
}

/** The block at which the query should be executed. */
export type Block_Height = {
  /** Value containing a block hash */
  hash?: InputMaybe<Scalars['Bytes']>;
  /** Value containing a block number */
  number?: InputMaybe<Scalars['Int']>;
  /**
   * Value containing the minimum block number.
   * In the case of `number_gte`, the query will be executed on the latest block only if
   * the subgraph has progressed to or past the minimum block number.
   * Defaults to the latest block when omitted.
   *
   */
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Deposit = {
  __typename?: 'Deposit';
  assets: Scalars['BigDecimal'];
  caller: User;
  id: Scalars['ID'];
  liquidityTokens: Scalars['BigDecimal'];
  timestamp: Scalars['BigInt'];
  to: User;
  transaction: Transaction;
};

export type Deposit_Filter = {
  assets?: InputMaybe<Scalars['BigDecimal']>;
  assets_gt?: InputMaybe<Scalars['BigDecimal']>;
  assets_gte?: InputMaybe<Scalars['BigDecimal']>;
  assets_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  assets_lt?: InputMaybe<Scalars['BigDecimal']>;
  assets_lte?: InputMaybe<Scalars['BigDecimal']>;
  assets_not?: InputMaybe<Scalars['BigDecimal']>;
  assets_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  caller?: InputMaybe<Scalars['String']>;
  caller_contains?: InputMaybe<Scalars['String']>;
  caller_contains_nocase?: InputMaybe<Scalars['String']>;
  caller_ends_with?: InputMaybe<Scalars['String']>;
  caller_ends_with_nocase?: InputMaybe<Scalars['String']>;
  caller_gt?: InputMaybe<Scalars['String']>;
  caller_gte?: InputMaybe<Scalars['String']>;
  caller_in?: InputMaybe<Array<Scalars['String']>>;
  caller_lt?: InputMaybe<Scalars['String']>;
  caller_lte?: InputMaybe<Scalars['String']>;
  caller_not?: InputMaybe<Scalars['String']>;
  caller_not_contains?: InputMaybe<Scalars['String']>;
  caller_not_contains_nocase?: InputMaybe<Scalars['String']>;
  caller_not_ends_with?: InputMaybe<Scalars['String']>;
  caller_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  caller_not_in?: InputMaybe<Array<Scalars['String']>>;
  caller_not_starts_with?: InputMaybe<Scalars['String']>;
  caller_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  caller_starts_with?: InputMaybe<Scalars['String']>;
  caller_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  liquidityTokens?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokens_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokens_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokens_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityTokens_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokens_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokens_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokens_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['String']>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Deposit_OrderBy {
  Assets = 'assets',
  Caller = 'caller',
  Id = 'id',
  LiquidityTokens = 'liquidityTokens',
  Timestamp = 'timestamp',
  To = 'to',
  Transaction = 'transaction',
}

export type LiquidityPosition = {
  __typename?: 'LiquidityPosition';
  id: Scalars['ID'];
  shares: Scalars['BigDecimal'];
  user: User;
};

export type LiquidityPositionSnapshot = {
  __typename?: 'LiquidityPositionSnapshot';
  availableAssets: Scalars['BigDecimal'];
  block: Scalars['Int'];
  id: Scalars['ID'];
  liquidityPosition: LiquidityPosition;
  lockedAssets: Scalars['BigDecimal'];
  shares: Scalars['BigDecimal'];
  sharesTotalSupply: Scalars['BigDecimal'];
  timestamp: Scalars['Int'];
  totalAssets: Scalars['BigDecimal'];
  user: User;
};

export type LiquidityPositionSnapshot_Filter = {
  availableAssets?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_gt?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_gte?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  availableAssets_lt?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_lte?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_not?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  block?: InputMaybe<Scalars['Int']>;
  block_gt?: InputMaybe<Scalars['Int']>;
  block_gte?: InputMaybe<Scalars['Int']>;
  block_in?: InputMaybe<Array<Scalars['Int']>>;
  block_lt?: InputMaybe<Scalars['Int']>;
  block_lte?: InputMaybe<Scalars['Int']>;
  block_not?: InputMaybe<Scalars['Int']>;
  block_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  liquidityPosition?: InputMaybe<Scalars['String']>;
  liquidityPosition_contains?: InputMaybe<Scalars['String']>;
  liquidityPosition_contains_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_ends_with?: InputMaybe<Scalars['String']>;
  liquidityPosition_ends_with_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_gt?: InputMaybe<Scalars['String']>;
  liquidityPosition_gte?: InputMaybe<Scalars['String']>;
  liquidityPosition_in?: InputMaybe<Array<Scalars['String']>>;
  liquidityPosition_lt?: InputMaybe<Scalars['String']>;
  liquidityPosition_lte?: InputMaybe<Scalars['String']>;
  liquidityPosition_not?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_contains?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_contains_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_ends_with?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_in?: InputMaybe<Array<Scalars['String']>>;
  liquidityPosition_not_starts_with?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_starts_with?: InputMaybe<Scalars['String']>;
  liquidityPosition_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lockedAssets?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_gt?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_gte?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lockedAssets_lt?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_lte?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_not?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  shares?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_gt?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_gte?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sharesTotalSupply_lt?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_lte?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_not?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  shares_gt?: InputMaybe<Scalars['BigDecimal']>;
  shares_gte?: InputMaybe<Scalars['BigDecimal']>;
  shares_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  shares_lt?: InputMaybe<Scalars['BigDecimal']>;
  shares_lte?: InputMaybe<Scalars['BigDecimal']>;
  shares_not?: InputMaybe<Scalars['BigDecimal']>;
  shares_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalAssets?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalAssets_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_not?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  user?: InputMaybe<Scalars['String']>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum LiquidityPositionSnapshot_OrderBy {
  AvailableAssets = 'availableAssets',
  Block = 'block',
  Id = 'id',
  LiquidityPosition = 'liquidityPosition',
  LockedAssets = 'lockedAssets',
  Shares = 'shares',
  SharesTotalSupply = 'sharesTotalSupply',
  Timestamp = 'timestamp',
  TotalAssets = 'totalAssets',
  User = 'user',
}

export type LiquidityPosition_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  shares?: InputMaybe<Scalars['BigDecimal']>;
  shares_gt?: InputMaybe<Scalars['BigDecimal']>;
  shares_gte?: InputMaybe<Scalars['BigDecimal']>;
  shares_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  shares_lt?: InputMaybe<Scalars['BigDecimal']>;
  shares_lte?: InputMaybe<Scalars['BigDecimal']>;
  shares_not?: InputMaybe<Scalars['BigDecimal']>;
  shares_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  user?: InputMaybe<Scalars['String']>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum LiquidityPosition_OrderBy {
  Id = 'id',
  Shares = 'shares',
  User = 'user',
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export type Policy = {
  __typename?: 'Policy';
  asset: Asset;
  assetPrice: Scalars['BigDecimal'];
  endTime: Scalars['BigInt'];
  id: Scalars['ID'];
  insured: User;
  payOutAmount: Scalars['BigDecimal'];
  premium: Scalars['BigDecimal'];
  startTime: Scalars['BigInt'];
  threshold: Scalars['Int'];
  transaction: Transaction;
  utilized: Scalars['Boolean'];
};

export type Policy_Filter = {
  asset?: InputMaybe<Scalars['String']>;
  assetPrice?: InputMaybe<Scalars['BigDecimal']>;
  assetPrice_gt?: InputMaybe<Scalars['BigDecimal']>;
  assetPrice_gte?: InputMaybe<Scalars['BigDecimal']>;
  assetPrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  assetPrice_lt?: InputMaybe<Scalars['BigDecimal']>;
  assetPrice_lte?: InputMaybe<Scalars['BigDecimal']>;
  assetPrice_not?: InputMaybe<Scalars['BigDecimal']>;
  assetPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  endTime?: InputMaybe<Scalars['BigInt']>;
  endTime_gt?: InputMaybe<Scalars['BigInt']>;
  endTime_gte?: InputMaybe<Scalars['BigInt']>;
  endTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endTime_lt?: InputMaybe<Scalars['BigInt']>;
  endTime_lte?: InputMaybe<Scalars['BigInt']>;
  endTime_not?: InputMaybe<Scalars['BigInt']>;
  endTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  insured?: InputMaybe<Scalars['String']>;
  insured_contains?: InputMaybe<Scalars['String']>;
  insured_contains_nocase?: InputMaybe<Scalars['String']>;
  insured_ends_with?: InputMaybe<Scalars['String']>;
  insured_ends_with_nocase?: InputMaybe<Scalars['String']>;
  insured_gt?: InputMaybe<Scalars['String']>;
  insured_gte?: InputMaybe<Scalars['String']>;
  insured_in?: InputMaybe<Array<Scalars['String']>>;
  insured_lt?: InputMaybe<Scalars['String']>;
  insured_lte?: InputMaybe<Scalars['String']>;
  insured_not?: InputMaybe<Scalars['String']>;
  insured_not_contains?: InputMaybe<Scalars['String']>;
  insured_not_contains_nocase?: InputMaybe<Scalars['String']>;
  insured_not_ends_with?: InputMaybe<Scalars['String']>;
  insured_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  insured_not_in?: InputMaybe<Array<Scalars['String']>>;
  insured_not_starts_with?: InputMaybe<Scalars['String']>;
  insured_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  insured_starts_with?: InputMaybe<Scalars['String']>;
  insured_starts_with_nocase?: InputMaybe<Scalars['String']>;
  payOutAmount?: InputMaybe<Scalars['BigDecimal']>;
  payOutAmount_gt?: InputMaybe<Scalars['BigDecimal']>;
  payOutAmount_gte?: InputMaybe<Scalars['BigDecimal']>;
  payOutAmount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  payOutAmount_lt?: InputMaybe<Scalars['BigDecimal']>;
  payOutAmount_lte?: InputMaybe<Scalars['BigDecimal']>;
  payOutAmount_not?: InputMaybe<Scalars['BigDecimal']>;
  payOutAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  premium?: InputMaybe<Scalars['BigDecimal']>;
  premium_gt?: InputMaybe<Scalars['BigDecimal']>;
  premium_gte?: InputMaybe<Scalars['BigDecimal']>;
  premium_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  premium_lt?: InputMaybe<Scalars['BigDecimal']>;
  premium_lte?: InputMaybe<Scalars['BigDecimal']>;
  premium_not?: InputMaybe<Scalars['BigDecimal']>;
  premium_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  startTime?: InputMaybe<Scalars['BigInt']>;
  startTime_gt?: InputMaybe<Scalars['BigInt']>;
  startTime_gte?: InputMaybe<Scalars['BigInt']>;
  startTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startTime_lt?: InputMaybe<Scalars['BigInt']>;
  startTime_lte?: InputMaybe<Scalars['BigInt']>;
  startTime_not?: InputMaybe<Scalars['BigInt']>;
  startTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  threshold?: InputMaybe<Scalars['Int']>;
  threshold_gt?: InputMaybe<Scalars['Int']>;
  threshold_gte?: InputMaybe<Scalars['Int']>;
  threshold_in?: InputMaybe<Array<Scalars['Int']>>;
  threshold_lt?: InputMaybe<Scalars['Int']>;
  threshold_lte?: InputMaybe<Scalars['Int']>;
  threshold_not?: InputMaybe<Scalars['Int']>;
  threshold_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  utilized?: InputMaybe<Scalars['Boolean']>;
  utilized_in?: InputMaybe<Array<Scalars['Boolean']>>;
  utilized_not?: InputMaybe<Scalars['Boolean']>;
  utilized_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
};

export enum Policy_OrderBy {
  Asset = 'asset',
  AssetPrice = 'assetPrice',
  EndTime = 'endTime',
  Id = 'id',
  Insured = 'insured',
  PayOutAmount = 'payOutAmount',
  Premium = 'premium',
  StartTime = 'startTime',
  Threshold = 'threshold',
  Transaction = 'transaction',
  Utilized = 'utilized',
}

export type Pool = {
  __typename?: 'Pool';
  availableAssets: Scalars['BigDecimal'];
  id: Scalars['ID'];
  liquidityProviderCount: Scalars['BigInt'];
  lockedAssets: Scalars['BigDecimal'];
  policyCount: Scalars['BigInt'];
  sharesTotalSupply: Scalars['BigDecimal'];
  totalAssets: Scalars['BigDecimal'];
  totalVolume: Scalars['BigDecimal'];
  txCount: Scalars['BigInt'];
  utilizationRate: Scalars['BigDecimal'];
};

export type PoolDayData = {
  __typename?: 'PoolDayData';
  availableAssets: Scalars['BigDecimal'];
  dailyVolume: Scalars['BigDecimal'];
  date: Scalars['Int'];
  id: Scalars['ID'];
  lockedAssets: Scalars['BigDecimal'];
  protocolFee: Scalars['BigDecimal'];
  sharesTotalSupply: Scalars['BigDecimal'];
  totalAssets: Scalars['BigDecimal'];
  totalVolume: Scalars['BigDecimal'];
  txCount: Scalars['BigInt'];
};

export type PoolDayData_Filter = {
  availableAssets?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_gt?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_gte?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  availableAssets_lt?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_lte?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_not?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolume?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lockedAssets?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_gt?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_gte?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lockedAssets_lt?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_lte?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_not?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  protocolFee?: InputMaybe<Scalars['BigDecimal']>;
  protocolFee_gt?: InputMaybe<Scalars['BigDecimal']>;
  protocolFee_gte?: InputMaybe<Scalars['BigDecimal']>;
  protocolFee_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  protocolFee_lt?: InputMaybe<Scalars['BigDecimal']>;
  protocolFee_lte?: InputMaybe<Scalars['BigDecimal']>;
  protocolFee_not?: InputMaybe<Scalars['BigDecimal']>;
  protocolFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sharesTotalSupply?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_gt?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_gte?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sharesTotalSupply_lt?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_lte?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_not?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalAssets?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalAssets_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_not?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolume?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum PoolDayData_OrderBy {
  AvailableAssets = 'availableAssets',
  DailyVolume = 'dailyVolume',
  Date = 'date',
  Id = 'id',
  LockedAssets = 'lockedAssets',
  ProtocolFee = 'protocolFee',
  SharesTotalSupply = 'sharesTotalSupply',
  TotalAssets = 'totalAssets',
  TotalVolume = 'totalVolume',
  TxCount = 'txCount',
}

export type PoolHourData = {
  __typename?: 'PoolHourData';
  availableAssets: Scalars['BigDecimal'];
  hourStartUnix: Scalars['Int'];
  hourlyTxns: Scalars['BigInt'];
  hourlyVolume: Scalars['BigDecimal'];
  id: Scalars['ID'];
  lockedAssets: Scalars['BigDecimal'];
  sharesTotalSupply: Scalars['BigDecimal'];
  totalAssets: Scalars['BigDecimal'];
};

export type PoolHourData_Filter = {
  availableAssets?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_gt?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_gte?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  availableAssets_lt?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_lte?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_not?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourStartUnix?: InputMaybe<Scalars['Int']>;
  hourStartUnix_gt?: InputMaybe<Scalars['Int']>;
  hourStartUnix_gte?: InputMaybe<Scalars['Int']>;
  hourStartUnix_in?: InputMaybe<Array<Scalars['Int']>>;
  hourStartUnix_lt?: InputMaybe<Scalars['Int']>;
  hourStartUnix_lte?: InputMaybe<Scalars['Int']>;
  hourStartUnix_not?: InputMaybe<Scalars['Int']>;
  hourStartUnix_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyTxns?: InputMaybe<Scalars['BigInt']>;
  hourlyTxns_gt?: InputMaybe<Scalars['BigInt']>;
  hourlyTxns_gte?: InputMaybe<Scalars['BigInt']>;
  hourlyTxns_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hourlyTxns_lt?: InputMaybe<Scalars['BigInt']>;
  hourlyTxns_lte?: InputMaybe<Scalars['BigInt']>;
  hourlyTxns_not?: InputMaybe<Scalars['BigInt']>;
  hourlyTxns_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hourlyVolume?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lockedAssets?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_gt?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_gte?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lockedAssets_lt?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_lte?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_not?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sharesTotalSupply?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_gt?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_gte?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sharesTotalSupply_lt?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_lte?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_not?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalAssets?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalAssets_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_not?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export enum PoolHourData_OrderBy {
  AvailableAssets = 'availableAssets',
  HourStartUnix = 'hourStartUnix',
  HourlyTxns = 'hourlyTxns',
  HourlyVolume = 'hourlyVolume',
  Id = 'id',
  LockedAssets = 'lockedAssets',
  SharesTotalSupply = 'sharesTotalSupply',
  TotalAssets = 'totalAssets',
}

export type Pool_Filter = {
  availableAssets?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_gt?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_gte?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  availableAssets_lt?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_lte?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_not?: InputMaybe<Scalars['BigDecimal']>;
  availableAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  liquidityProviderCount?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityProviderCount_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_not?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockedAssets?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_gt?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_gte?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lockedAssets_lt?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_lte?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_not?: InputMaybe<Scalars['BigDecimal']>;
  lockedAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  policyCount?: InputMaybe<Scalars['BigInt']>;
  policyCount_gt?: InputMaybe<Scalars['BigInt']>;
  policyCount_gte?: InputMaybe<Scalars['BigInt']>;
  policyCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  policyCount_lt?: InputMaybe<Scalars['BigInt']>;
  policyCount_lte?: InputMaybe<Scalars['BigInt']>;
  policyCount_not?: InputMaybe<Scalars['BigInt']>;
  policyCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sharesTotalSupply?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_gt?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_gte?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sharesTotalSupply_lt?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_lte?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_not?: InputMaybe<Scalars['BigDecimal']>;
  sharesTotalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalAssets?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalAssets_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_not?: InputMaybe<Scalars['BigDecimal']>;
  totalAssets_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolume?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  utilizationRate?: InputMaybe<Scalars['BigDecimal']>;
  utilizationRate_gt?: InputMaybe<Scalars['BigDecimal']>;
  utilizationRate_gte?: InputMaybe<Scalars['BigDecimal']>;
  utilizationRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  utilizationRate_lt?: InputMaybe<Scalars['BigDecimal']>;
  utilizationRate_lte?: InputMaybe<Scalars['BigDecimal']>;
  utilizationRate_not?: InputMaybe<Scalars['BigDecimal']>;
  utilizationRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export enum Pool_OrderBy {
  AvailableAssets = 'availableAssets',
  Id = 'id',
  LiquidityProviderCount = 'liquidityProviderCount',
  LockedAssets = 'lockedAssets',
  PolicyCount = 'policyCount',
  SharesTotalSupply = 'sharesTotalSupply',
  TotalAssets = 'totalAssets',
  TotalVolume = 'totalVolume',
  TxCount = 'txCount',
  UtilizationRate = 'utilizationRate',
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  asset?: Maybe<Asset>;
  assetDayData?: Maybe<AssetDayData>;
  assetDayDatas: Array<AssetDayData>;
  assets: Array<Asset>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  liquidityPosition?: Maybe<LiquidityPosition>;
  liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>;
  liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>;
  liquidityPositions: Array<LiquidityPosition>;
  policies: Array<Policy>;
  policy?: Maybe<Policy>;
  pool?: Maybe<Pool>;
  poolDayData?: Maybe<PoolDayData>;
  poolDayDatas: Array<PoolDayData>;
  poolHourData?: Maybe<PoolHourData>;
  poolHourDatas: Array<PoolHourData>;
  pools: Array<Pool>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  user?: Maybe<User>;
  users: Array<User>;
  withdraw?: Maybe<Withdraw>;
  withdraws: Array<Withdraw>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryAssetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAssetDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAssetDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AssetDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AssetDayData_Filter>;
};

export type QueryAssetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Asset_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Asset_Filter>;
};

export type QueryDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Deposit_Filter>;
};

export type QueryLiquidityPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryLiquidityPositionSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryLiquidityPositionSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPositionSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LiquidityPositionSnapshot_Filter>;
};

export type QueryLiquidityPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LiquidityPosition_Filter>;
};

export type QueryPoliciesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Policy_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Policy_Filter>;
};

export type QueryPolicyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPoolDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPoolDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolDayData_Filter>;
};

export type QueryPoolHourDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPoolHourDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolHourData_Filter>;
};

export type QueryPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool_Filter>;
};

export type QueryTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transaction_Filter>;
};

export type QueryUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

export type QueryWithdrawArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryWithdrawsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdraw_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Withdraw_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  asset?: Maybe<Asset>;
  assetDayData?: Maybe<AssetDayData>;
  assetDayDatas: Array<AssetDayData>;
  assets: Array<Asset>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  liquidityPosition?: Maybe<LiquidityPosition>;
  liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>;
  liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>;
  liquidityPositions: Array<LiquidityPosition>;
  policies: Array<Policy>;
  policy?: Maybe<Policy>;
  pool?: Maybe<Pool>;
  poolDayData?: Maybe<PoolDayData>;
  poolDayDatas: Array<PoolDayData>;
  poolHourData?: Maybe<PoolHourData>;
  poolHourDatas: Array<PoolHourData>;
  pools: Array<Pool>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  user?: Maybe<User>;
  users: Array<User>;
  withdraw?: Maybe<Withdraw>;
  withdraws: Array<Withdraw>;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SubscriptionAssetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAssetDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAssetDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AssetDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AssetDayData_Filter>;
};

export type SubscriptionAssetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Asset_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Asset_Filter>;
};

export type SubscriptionDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Deposit_Filter>;
};

export type SubscriptionLiquidityPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionLiquidityPositionSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionLiquidityPositionSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPositionSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LiquidityPositionSnapshot_Filter>;
};

export type SubscriptionLiquidityPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LiquidityPosition_Filter>;
};

export type SubscriptionPoliciesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Policy_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Policy_Filter>;
};

export type SubscriptionPolicyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPoolDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPoolDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolDayData_Filter>;
};

export type SubscriptionPoolHourDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPoolHourDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolHourData_Filter>;
};

export type SubscriptionPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool_Filter>;
};

export type SubscriptionTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transaction_Filter>;
};

export type SubscriptionUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

export type SubscriptionWithdrawArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionWithdrawsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdraw_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Withdraw_Filter>;
};

export type Transaction = {
  __typename?: 'Transaction';
  blockNumber: Scalars['BigInt'];
  deposits: Array<Deposit>;
  id: Scalars['ID'];
  policies: Array<Policy>;
  timestamp: Scalars['BigInt'];
  withdrawals: Array<Withdraw>;
};

export type TransactionDepositsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Deposit_Filter>;
};

export type TransactionPoliciesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Policy_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Policy_Filter>;
};

export type TransactionWithdrawalsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdraw_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Withdraw_Filter>;
};

export type Transaction_Filter = {
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposits?: InputMaybe<Array<Scalars['String']>>;
  deposits_contains?: InputMaybe<Array<Scalars['String']>>;
  deposits_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  deposits_not?: InputMaybe<Array<Scalars['String']>>;
  deposits_not_contains?: InputMaybe<Array<Scalars['String']>>;
  deposits_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  policies?: InputMaybe<Array<Scalars['String']>>;
  policies_contains?: InputMaybe<Array<Scalars['String']>>;
  policies_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  policies_not?: InputMaybe<Array<Scalars['String']>>;
  policies_not_contains?: InputMaybe<Array<Scalars['String']>>;
  policies_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawals?: InputMaybe<Array<Scalars['String']>>;
  withdrawals_contains?: InputMaybe<Array<Scalars['String']>>;
  withdrawals_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  withdrawals_not?: InputMaybe<Array<Scalars['String']>>;
  withdrawals_not_contains?: InputMaybe<Array<Scalars['String']>>;
  withdrawals_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
};

export enum Transaction_OrderBy {
  BlockNumber = 'blockNumber',
  Deposits = 'deposits',
  Id = 'id',
  Policies = 'policies',
  Timestamp = 'timestamp',
  Withdrawals = 'withdrawals',
}

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  liquidityPositions?: Maybe<Array<LiquidityPosition>>;
  policies: Array<Policy>;
  policyCount: Scalars['BigInt'];
  premiumPaid: Scalars['BigDecimal'];
};

export type UserLiquidityPositionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LiquidityPosition_Filter>;
};

export type UserPoliciesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Policy_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Policy_Filter>;
};

export type User_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  policyCount?: InputMaybe<Scalars['BigInt']>;
  policyCount_gt?: InputMaybe<Scalars['BigInt']>;
  policyCount_gte?: InputMaybe<Scalars['BigInt']>;
  policyCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  policyCount_lt?: InputMaybe<Scalars['BigInt']>;
  policyCount_lte?: InputMaybe<Scalars['BigInt']>;
  policyCount_not?: InputMaybe<Scalars['BigInt']>;
  policyCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  premiumPaid?: InputMaybe<Scalars['BigDecimal']>;
  premiumPaid_gt?: InputMaybe<Scalars['BigDecimal']>;
  premiumPaid_gte?: InputMaybe<Scalars['BigDecimal']>;
  premiumPaid_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  premiumPaid_lt?: InputMaybe<Scalars['BigDecimal']>;
  premiumPaid_lte?: InputMaybe<Scalars['BigDecimal']>;
  premiumPaid_not?: InputMaybe<Scalars['BigDecimal']>;
  premiumPaid_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export enum User_OrderBy {
  Id = 'id',
  LiquidityPositions = 'liquidityPositions',
  Policies = 'policies',
  PolicyCount = 'policyCount',
  PremiumPaid = 'premiumPaid',
}

export type Withdraw = {
  __typename?: 'Withdraw';
  assets: Scalars['BigDecimal'];
  caller: User;
  id: Scalars['ID'];
  liquidityTokens: Scalars['BigDecimal'];
  owner: User;
  timestamp: Scalars['BigInt'];
  to: User;
  transaction: Transaction;
};

export type Withdraw_Filter = {
  assets?: InputMaybe<Scalars['BigDecimal']>;
  assets_gt?: InputMaybe<Scalars['BigDecimal']>;
  assets_gte?: InputMaybe<Scalars['BigDecimal']>;
  assets_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  assets_lt?: InputMaybe<Scalars['BigDecimal']>;
  assets_lte?: InputMaybe<Scalars['BigDecimal']>;
  assets_not?: InputMaybe<Scalars['BigDecimal']>;
  assets_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  caller?: InputMaybe<Scalars['String']>;
  caller_contains?: InputMaybe<Scalars['String']>;
  caller_contains_nocase?: InputMaybe<Scalars['String']>;
  caller_ends_with?: InputMaybe<Scalars['String']>;
  caller_ends_with_nocase?: InputMaybe<Scalars['String']>;
  caller_gt?: InputMaybe<Scalars['String']>;
  caller_gte?: InputMaybe<Scalars['String']>;
  caller_in?: InputMaybe<Array<Scalars['String']>>;
  caller_lt?: InputMaybe<Scalars['String']>;
  caller_lte?: InputMaybe<Scalars['String']>;
  caller_not?: InputMaybe<Scalars['String']>;
  caller_not_contains?: InputMaybe<Scalars['String']>;
  caller_not_contains_nocase?: InputMaybe<Scalars['String']>;
  caller_not_ends_with?: InputMaybe<Scalars['String']>;
  caller_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  caller_not_in?: InputMaybe<Array<Scalars['String']>>;
  caller_not_starts_with?: InputMaybe<Scalars['String']>;
  caller_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  caller_starts_with?: InputMaybe<Scalars['String']>;
  caller_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  liquidityTokens?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokens_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokens_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokens_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityTokens_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokens_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokens_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokens_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['String']>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Withdraw_OrderBy {
  Assets = 'assets',
  Caller = 'caller',
  Id = 'id',
  LiquidityTokens = 'liquidityTokens',
  Owner = 'owner',
  Timestamp = 'timestamp',
  To = 'to',
  Transaction = 'transaction',
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
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

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny',
}

export type PoolDataQueryVariables = Exact<{
  riskPool: Scalars['ID'];
}>;

export type PoolDataQuery = {
  __typename?: 'Query';
  pool?: {
    __typename?: 'Pool';
    availableAssets: string;
    lockedAssets: string;
    sharesTotalSupply: string;
    totalAssets: string;
    utilizationRate: string;
  } | null;
};

export const PoolDataDocument = gql`
  query poolData($riskPool: ID!) {
    pool(id: $riskPool) {
      availableAssets
      lockedAssets
      sharesTotalSupply
      totalAssets
      utilizationRate
    }
  }
`;

/**
 * __usePoolDataQuery__
 *
 * To run a query within a React component, call `usePoolDataQuery` and pass it any options that fit your needs.
 * When your component renders, `usePoolDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePoolDataQuery({
 *   variables: {
 *      riskPool: // value for 'riskPool'
 *   },
 * });
 */
export function usePoolDataQuery(baseOptions: Apollo.QueryHookOptions<PoolDataQuery, PoolDataQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PoolDataQuery, PoolDataQueryVariables>(PoolDataDocument, options);
}
export function usePoolDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PoolDataQuery, PoolDataQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PoolDataQuery, PoolDataQueryVariables>(PoolDataDocument, options);
}
export type PoolDataQueryHookResult = ReturnType<typeof usePoolDataQuery>;
export type PoolDataLazyQueryHookResult = ReturnType<typeof usePoolDataLazyQuery>;
export type PoolDataQueryResult = Apollo.QueryResult<PoolDataQuery, PoolDataQueryVariables>;

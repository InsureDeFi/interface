import { eventsQuery, snapshotsQuery } from '../../.graphclient';

export interface Position {
  shares: number;
  sharesTotalSupply: number;
  totalAssets: number;
}

export function getReturns(
  snapshots: snapshotsQuery,
  events: eventsQuery,
  totalSupply: string,
  totalLiquidity: string
) {
  if (!snapshots.liquidityPositionSnapshots.length) {
    return { principal: 0, fees: 0 };
  }
  const lpSnapshots = snapshots.liquidityPositionSnapshots;
  const principal = getPrincipal(events);
  let fees = 0;

  const currentPosition: Position = {
    shares: Number(lpSnapshots[lpSnapshots.length - 1].shares),
    sharesTotalSupply: Number(totalSupply),
    totalAssets: Number(totalLiquidity),
  };

  lpSnapshots.forEach((snapshot, index) => {
    const positionT0 = snapshot as unknown as Position;
    const positionT1 =
      index === lpSnapshots.length - 1 ? currentPosition : (lpSnapshots[index + 1] as unknown as Position);

    const result = getEarningForPositionWindow(positionT0, positionT1);
    fees = fees + result;
  });

  return { principal, fees };
}

export function getPrincipal(events: eventsQuery) {
  let amount = 0;

  events.deposits.forEach((deposit) => (amount += parseFloat(deposit.assets)));
  events.withdraws.forEach((withdraw) => (amount -= parseFloat(withdraw.assets)));

  return amount;
}

export function getEarningForPositionWindow(positionT0: Position, positionT1: Position) {
  const t0Ownership = positionT0.shares / positionT0.sharesTotalSupply;
  const t1Ownership = positionT0.shares / positionT1.sharesTotalSupply;

  const netValueT0 = t0Ownership * positionT0.totalAssets;
  const netValueT1 = t1Ownership * positionT1.totalAssets;

  return netValueT1 - netValueT0;
}

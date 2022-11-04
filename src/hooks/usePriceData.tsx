import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

interface BaseResposne {
  status: {
    elapsed: number;
    timestamp: string;
  };
}
interface AssetPriceData extends BaseResposne {
  data: {
    market_data: {
      price_usd: number;
      percent_change_usd_last_24_hours: number;
    };
  };
}

interface HistoricPriceData extends BaseResposne {
  data: {
    values: [[timestamp: string, open: number, high: number, low: number, close: number, volume: number]];
  };
}

const getHistoricPrices = async (asset: string) => {
  const now = new Date();
  const to = now.toISOString().split('T')[0];
  now.setDate(new Date().getDate() - 365);
  const from = now.toISOString().split('T')[0];

  const res = await fetch(
    `https://data.messari.io/api/v1/assets/${asset}/metrics/price/time-series?start=${from}&end=${to}&interval=1w&timestamp-format=rfc3339&fields=values`
  )
    .then((response) => response.json())
    .then((data: HistoricPriceData) => {
      const monthlyPriceData = data.data.values;
      const labels = monthlyPriceData.map((priceData) => new Date(Date.parse(priceData[0])).toDateString());
      const dataset = monthlyPriceData.map((priceData) => priceData[4]);
      return { labels, dataset };
    });
  return res;
};

const getPrice = (asset: string) =>
  fetch(
    `https://data.messari.io/api/v1/assets/${asset}/metrics/market-data?fields=market_data/price_usd,market_data/percent_change_usd_last_24_hours`
  )
    .then((response) => response.json())
    .then((data: AssetPriceData) => {
      const priceData = data.data.market_data;
      return { price: priceData.price_usd, dayChange: priceData.percent_change_usd_last_24_hours };
    });

export function usePriceData(asset: string) {
  const { data: priceData } = useQuery(['asset-price', asset], () => getPrice(asset));
  const { data: historicPrices } = useQuery(['historic-prices', asset], async () => getHistoricPrices(asset));

  return useMemo(() => ({ historicPrices, priceData }), [historicPrices, priceData]);
}

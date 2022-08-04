import { useMemo } from 'react';
import useSWR from 'swr';

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

const historicDataFetcher = (url: string) =>
  fetch(url)
    .then((response) => response.json())
    .then((data: HistoricPriceData) => {
      const monthlyPriceData = data.data.values;
      const labels = monthlyPriceData.map((priceData) => new Date(Date.parse(priceData[0])).toDateString());
      const dataset = monthlyPriceData.map((priceData) => priceData[4]);
      return { labels, dataset };
    });

const priceFetcher = (url: string) =>
  fetch(url)
    .then((response) => response.json())
    .then((data: AssetPriceData) => {
      const priceData = data.data.market_data;
      return { price: priceData.price_usd, dayChange: priceData.percent_change_usd_last_24_hours };
    });

export function usePriceData(asset: string) {
  const now = new Date();
  const today = now.toISOString().split('T')[0];
  now.setDate(new Date().getDate() - 365);
  const lastYear = now.toISOString().split('T')[0];

  const { data: historicPriceData } = useSWR(
    `https://data.messari.io/api/v1/assets/${asset}/metrics/price/time-series?start=${lastYear}&end=${today}&interval=1w&timestamp-format=rfc3339&fields=values`,
    historicDataFetcher,
    { revalidateOnFocus: false }
  );
  const { data: priceData } = useSWR(
    `https://data.messari.io/api/v1/assets/${asset}/metrics/market-data?fields=market_data/price_usd,market_data/percent_change_usd_last_24_hours`,
    priceFetcher,
    { revalidateOnFocus: false, refreshInterval: 10000 }
  );

  return useMemo(() => ({ historicPriceData, priceData }), [historicPriceData, priceData]);
}

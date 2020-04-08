import { IForecastResponse, ILastRunResponse } from '@/interfaces';

export const baseUrl = 'http://api.iri.abryrath.com:9090';

export const fetchForecastToday = (): Promise<IForecastResponse> => {
  return fetch(`${baseUrl}/forecast/today`).then((resp) => resp.json()) as Promise<IForecastResponse>;
};

export const fetchLastRun = (): Promise<ILastRunResponse> => {
  return fetch(`${baseUrl}/history/last-run`).then((resp) => resp.json()) as Promise<ILastRunResponse>;
};

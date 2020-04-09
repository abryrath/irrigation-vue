import { IDate, ILastRun } from '@/interfaces';

// export const baseUrl = 'http://api.iri.abryrath.com:9090';
export const baseUrl = 'http://localhost:4000';
const headers = new Headers();
headers.append('Access-Control-Allow-Origin', '*');
const opts = {
  mode: 'cors',
  credentials: 'include',
  headers,
};

export const fetchForecastToday = (): Promise<IDate> => {
  return fetch(`${baseUrl}/forecast/today`, opts).then((resp) => resp.json()) as Promise<IDate>;
};

export const fetchLastRun = (): Promise<ILastRun> => {
  return fetch(`${baseUrl}/history/latest`).then((resp) => resp.json()) as Promise<ILastRun>;
};

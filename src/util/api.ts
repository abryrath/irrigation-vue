import { IDate, ILastRun } from '@/interfaces';
import ky from 'ky';

export const baseUrl = 'http://127.0.0.1:4000';

// const headers = new Headers();
// headers.append('Access-Control-Allow-Origin', '*');

export const client = ky.create({
  prefixUrl: baseUrl,
  // credentials: 'include',
  // mode: 'cors',
  // headers: headers,
});

export const fetchForecastToday = (): Promise<IDate> => {
  return client
    .get('forecast/today')
    .then((resp: Response) => resp.json()) as Promise<IDate>;
};

export const fetchLastRun = (): Promise<ILastRun> => {
  return client
    .get('history/latest')
    .then((resp: Response) => resp.json()) as Promise<ILastRun>;
};

import moment from 'moment';

export const toDateTime = (dt: number) => {
  return moment(`${dt}`, 'X');
};

export const format = (dt: number, format: string = 'ha - dddd, MMM Qo, Y') => {
  return toDateTime(dt)
    .format(format)
}

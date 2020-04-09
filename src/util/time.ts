import moment, { Moment } from 'moment';

export const toDateTime = (dt: number) => {
  return moment(`${dt}`, 'X');
};

export const format = (
  dt: number,
  formatString: string = 'ha - dddd, MMM Qo, Y',
) => {
  return toDateTime(dt).format(formatString);
};

export const formatTimeOnly = (momentInstance: Moment): string => {
  return momentInstance.format('h:ma');
};

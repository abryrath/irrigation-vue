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

export const timeOfDay = (hour: number): string => {
  if (hour < 12) {
    return `${hour}am`;
  } else if (hour === 12) {
    return '12pm';
  } else {
    return `${hour - 12}pm`;
  }
};

export const timeToSeconds = (m: Moment): number => {
  return (m.get('hour') * 60 * 60) + (m.get('seconds') * 60);
};

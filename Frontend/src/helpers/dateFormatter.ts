import { DateProps } from '../types/date';

const dateFormatter = (date: string, dateProps: DateProps) => {
  const { locale, year, month, day } = dateProps;
  const formattedDate = new Date(date).toLocaleDateString(locale, {
    year,
    month,
    day,
  });
  return formattedDate;
};

export { dateFormatter };

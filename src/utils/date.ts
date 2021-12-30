import moment from 'moment';

export function formatDate(unformattedDate: string): string {
  return moment(unformattedDate).format('DD/MM/YYYY');
}

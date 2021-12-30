import { formatDate } from '../date';

describe('utils/date', () => {
  it('should format date to DD/MM/YYYY when is a valid date', async () => {
    const date = formatDate('1994-08-14');

    expect(date).toBe('14/08/1994');
  });

  it('should not format date to DD/MM/YYYY and return "Invalid Date" when is an invalid date', async () => {
    const date = formatDate('1994-13-14');

    expect(date).toBe('Invalid date');
  });
});

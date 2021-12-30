import { fireEvent, render } from '@testing-library/react';

import { Lead } from '../../../../types/information';
import { formatDate } from '../../../../utils/date';

import Item from '../item';

const initialProps: Lead = {
  birthDate: '14/08/1994',
  email: 'john@doe.com',
  firstName: 'John',
  gender: 'male',
  lastName: 'Doe',
  name: 'John Edward Doe',
  nid: '01234567',
  phone: '+57(323) 9309-329033',
  score: 50,
};

describe('<Item />', () => {
  it('should renders default layout properly', () => {
    const { getByText } = render(<Item {...initialProps} />);

    const formattedBirthDate = formatDate(initialProps.birthDate);

    expect(getByText('birth date')).toBeInTheDocument();
    expect(getByText('gender')).toBeInTheDocument();
    expect(getByText('nid')).toBeInTheDocument();

    expect(getByText(formattedBirthDate)).toBeInTheDocument();
    expect(getByText(initialProps.gender)).toBeInTheDocument();
    expect(getByText(initialProps.nid)).toBeInTheDocument();
  });
});

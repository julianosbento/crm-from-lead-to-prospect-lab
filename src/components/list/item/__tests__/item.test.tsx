import { fireEvent, render } from '@testing-library/react';

import { Lead } from '../../../../types/information';

import Item from '../item';

const initialProps: Lead = {
  birthDate: '14/08/1994',
  email: 'john@doe.com',
  firstName: 'John',
  gender: 'male',
  lastName: 'Doe',
  nid: '01234567',
  phone: '+57(323) 9309-329033',
};

describe('<Item />', () => {
  it('should renders default layout properly', () => {
    const { getByText } = render(<Item {...initialProps} />);

    expect(getByText(initialProps.birthDate)).toBeInTheDocument();
    expect(getByText(initialProps.gender)).toBeInTheDocument();
    expect(getByText(initialProps.nid)).toBeInTheDocument();
  });
});

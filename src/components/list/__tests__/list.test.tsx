import { fireEvent, render } from '@testing-library/react';

import List from '../list';

import type { ListProps } from '../list';
import { Lead } from '../../../types/information';

const item: Lead = {
  birthDate: '14/08/1994',
  email: 'john@doe.com',
  firstName: 'John',
  gender: 'male',
  lastName: 'Doe',
  nid: '01234567',
  phone: '+57(103) 3203-9403209',
};

export const initialProps: ListProps = {
  data: [item, item, item],
  title: 'some title,',
};

describe('<List />', () => {
  it.each(initialProps.data)('should renders default layout properly', (item) => {
    const { getByText, getAllByText } = render(<List {...initialProps} />);

    expect(getByText(initialProps.title)).toBeInTheDocument();

    expect(getAllByText(item.birthDate)).toHaveLength(3);
    expect(getAllByText(item.email)).toHaveLength(3);
    expect(getAllByText(`${item.firstName} ${item.lastName}`)).toHaveLength(3);
    expect(getAllByText(item.gender)).toHaveLength(3);
    expect(getAllByText(item.nid)).toHaveLength(3);
    expect(getAllByText(item.phone)).toHaveLength(3);
  });

  it('should open first list item when is clicked properly', () => {
    const { getAllByText } = render(<List {...initialProps} />);

    const collapsible = getAllByText(initialProps.data[0].nid)[0].closest('span');

    expect(collapsible!).toBeInTheDocument();

    expect(collapsible!).toHaveClass('is-closed');
    expect(collapsible!).not.toHaveClass('is-open');

    fireEvent.click(collapsible!);

    expect(collapsible!).not.toHaveClass('is-closed');
    expect(collapsible!).toHaveClass('is-open');
  });
});

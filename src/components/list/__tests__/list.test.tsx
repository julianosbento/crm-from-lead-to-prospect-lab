import moment from 'moment';
import { fireEvent, render } from '@testing-library/react';

import List from '../list';

import { Lead } from '../../../types/information';
import { ButtonProps } from '../../button/button';

import type { ListProps } from '../list';
import { formatDate } from '../../../utils/date';

const item: Lead = {
  birthDate: '1994-08-14',
  email: 'john@doe.com',
  firstName: 'John',
  gender: 'male',
  lastName: 'Doe',
  name: 'John Edwards Doe',
  nid: '01234567',
  phone: '+57 (103) 3203-9403209',
  score: 60,
};

export const initialProps: ListProps = {
  data: [item, item, item],
  title: 'some title,',
};

describe('<List />', () => {
  it.each(initialProps.data)('should renders default layout properly for ($firstName)', (item) => {
    const { getByText, getAllByText } = render(<List {...initialProps} />);

    expect(getByText(initialProps.title)).toBeInTheDocument();

    const formattedBirthDate = formatDate(item.birthDate);

    expect(getAllByText('birth date')).toHaveLength(3);
    expect(getAllByText('email')).toHaveLength(3);
    expect(getAllByText('name')).toHaveLength(3);
    expect(getAllByText('gender')).toHaveLength(3);
    expect(getAllByText('nid')).toHaveLength(3);
    expect(getAllByText('phone')).toHaveLength(3);
    expect(getAllByText('score')).toHaveLength(3);

    expect(getAllByText(formattedBirthDate)).toHaveLength(3);
    expect(getAllByText(item.email)).toHaveLength(3);
    expect(getAllByText(`${item.firstName} ${item.lastName}`)).toHaveLength(3);
    expect(getAllByText(item.gender)).toHaveLength(3);
    expect(getAllByText(item.nid)).toHaveLength(3);
    expect(getAllByText(item.phone)).toHaveLength(3);
    expect(getAllByText(item.score)).toHaveLength(3);
  });

  it.each(initialProps.data)(
    'should renders layout with button properly for ($firstName)',
    (item) => {
      const button: ButtonProps = { text: 'some text', onClick: jest.fn() };

      const { getByText, getAllByText } = render(<List {...initialProps} button={button} />);

      expect(getByText(initialProps.title)).toBeInTheDocument();

      const buttonComponent = getByText(button.text);
      expect(buttonComponent).toBeInTheDocument();
      fireEvent.click(buttonComponent);
      expect(button.onClick).toHaveBeenCalledTimes(1);

      const formattedBirthDate = formatDate(item.birthDate);

      expect(getAllByText('birth date')).toHaveLength(3);
      expect(getAllByText('email')).toHaveLength(3);
      expect(getAllByText('name')).toHaveLength(3);
      expect(getAllByText('gender')).toHaveLength(3);
      expect(getAllByText('nid')).toHaveLength(3);
      expect(getAllByText('phone')).toHaveLength(3);
      expect(getAllByText('score')).toHaveLength(3);

      expect(getAllByText(formattedBirthDate)).toHaveLength(3);
      expect(getAllByText(item.email)).toHaveLength(3);
      expect(getAllByText(`${item.firstName} ${item.lastName}`)).toHaveLength(3);
      expect(getAllByText(item.gender)).toHaveLength(3);
      expect(getAllByText(item.nid)).toHaveLength(3);
      expect(getAllByText(item.phone)).toHaveLength(3);
      expect(getAllByText(item.score)).toHaveLength(3);
    }
  );

  it('should open first list item when is clicked properly', () => {
    const { getAllByText } = render(<List {...initialProps} />);

    const collapsible = getAllByText(initialProps.data[0].phone)[0].closest('span');

    expect(collapsible!).toBeInTheDocument();

    expect(collapsible!).toHaveClass('is-closed');
    expect(collapsible!).not.toHaveClass('is-open');

    fireEvent.click(collapsible!);

    expect(collapsible!).not.toHaveClass('is-closed');
    expect(collapsible!).toHaveClass('is-open');
  });
});

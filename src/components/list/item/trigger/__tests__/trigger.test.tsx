import { render } from '@testing-library/react';

import Trigger from '../trigger';

import { colors } from '../../../../../tokens/colors';

import type { TriggerProps } from '../trigger';

const initialProps: TriggerProps = {
  email: 'some text',
  firstName: 'John',
  lastName: 'Doe',
  opened: false,
  phone: '+57 (213)-312839',
  score: 0,
};

describe('<Trigger />', () => {
  it('should renders default layout properly', () => {
    const { getByText } = render(<Trigger {...initialProps} />);

    expect(getByText('email')).toBeInTheDocument();
    expect(getByText('name')).toBeInTheDocument();
    expect(getByText('phone')).toBeInTheDocument();
    expect(getByText('score')).toBeInTheDocument();

    expect(getByText(initialProps.email)).toBeInTheDocument();
    expect(getByText(`${initialProps.firstName} ${initialProps.lastName}`)).toBeInTheDocument();
    expect(getByText(initialProps.phone)).toBeInTheDocument();

    expect(getByText(initialProps.score)).toBeInTheDocument();
    expect(getByText(initialProps.score)).toHaveStyle({ color: colors.error });
  });

  it('should renders layout for high score than 60 properly', () => {
    const highScore = 75;
    const { getByText } = render(<Trigger {...initialProps} score={highScore} />);

    expect(getByText('email')).toBeInTheDocument();
    expect(getByText('name')).toBeInTheDocument();
    expect(getByText('phone')).toBeInTheDocument();
    expect(getByText('score')).toBeInTheDocument();

    expect(getByText(initialProps.email)).toBeInTheDocument();
    expect(getByText(`${initialProps.firstName} ${initialProps.lastName}`)).toBeInTheDocument();
    expect(getByText(initialProps.phone)).toBeInTheDocument();

    expect(getByText(highScore)).toBeInTheDocument();
    expect(getByText(highScore)).toHaveStyle({ color: colors.success });
  });
});

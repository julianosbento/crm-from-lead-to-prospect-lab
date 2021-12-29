import { fireEvent, render } from '@testing-library/react';

import { colors } from '../../../tokens/colors';

import Button from '../button';

import type { ButtonProps } from '../button';

const initialProps: ButtonProps = {
  color: colors.success,
  text: 'test',
  onClick: jest.fn(),
};

describe('<Button />', () => {
  it('should renders default layout properly', () => {
    const { getByText } = render(<Button {...initialProps} />);

    expect(getByText(initialProps.text!)).toBeInTheDocument();
    expect(getByText(initialProps.text!)).toHaveStyle({ fontSize: 12 });
  });

  it('should renders layout with custom font size properly', () => {
    const { getByText } = render(<Button {...initialProps} fontSize={10} />);

    expect(getByText(initialProps.text!)).toBeInTheDocument();
    expect(getByText(initialProps.text!)).toHaveStyle({ fontSize: 10 });
  });

  it('should trigger handler on click properly', () => {
    const { getByText } = render(<Button {...initialProps} />);

    fireEvent.click(getByText(initialProps.text!));

    expect(initialProps.onClick).toHaveBeenCalledTimes(1);
  });
});

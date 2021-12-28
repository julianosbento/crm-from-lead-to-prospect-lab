import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Button from '../button';
import type { ButtonProps } from '../button';
import { colors } from '../../../tokens/colors';

const initialProps: ButtonProps = {
  color: colors.success,
  text: 'test',
  onClick: jest.fn(),
};

describe('<Button />', () => {
  it('should renders default layout properly', () => {
    render(<Button {...initialProps} />);

    expect(screen.getByText(initialProps.text!)).toBeInTheDocument();
    expect(screen.getByText(initialProps.text!)).toHaveStyle({ fontSize: 12 });
  });

  it('should renders layout with custom font size properly', () => {
    render(<Button {...initialProps} fontSize={10} />);

    expect(screen.getByText(initialProps.text!)).toBeInTheDocument();
    expect(screen.getByText(initialProps.text!)).toHaveStyle({ fontSize: 10 });
  });

  it('should trigger handler on click properly', () => {
    render(<Button {...initialProps} />);

    fireEvent.click(screen.getByText(initialProps.text!));

    expect(initialProps.onClick).toHaveBeenCalledTimes(1);
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';

import Example from '../example';
import type { ExampleProps } from '../example';

const initialProps: ExampleProps = {
  text: 'some text',
};

describe('<Example />', () => {
  it('should renders default layout properly', () => {
    render(<Example {...initialProps} />);
    expect(screen.getByText(initialProps.text!)).toBeInTheDocument();
  });
});

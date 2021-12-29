import { render } from '@testing-library/react';

import Example from '../example';

import type { ExampleProps } from '../example';

const initialProps: ExampleProps = {
  text: 'some text',
};

describe('<Example />', () => {
  it('should renders default layout properly', () => {
    const { getByText } = render(<Example {...initialProps} />);
    expect(getByText(initialProps.text!)).toBeInTheDocument();
  });
});

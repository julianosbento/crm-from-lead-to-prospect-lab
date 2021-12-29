import { render } from '@testing-library/react';

import Title from '../title';

import type { TitleProps } from '../title';

const initialProps: TitleProps = {
  title: 'some title',
};

describe('<Title />', () => {
  it('should renders default layout properly', () => {
    const { getByText } = render(<Title {...initialProps} />);

    expect(getByText(initialProps.title)).toBeInTheDocument();
  });
});

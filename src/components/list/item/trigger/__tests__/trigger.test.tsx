import { render } from '@testing-library/react';

import Trigger from '../trigger';

import type { TriggerProps } from '../trigger';

const initialProps: TriggerProps = {
  text: 'some text',
};

describe('<Trigger />', () => {
  it('should renders default layout properly', () => {
    const { getByText } = render(<Trigger {...initialProps} />);
    expect(getByText(initialProps.text!)).toBeInTheDocument();
  });
});

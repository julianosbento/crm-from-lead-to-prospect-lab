import { render } from '@testing-library/react';

import Information from '../information';
import type { InformationProps } from '../information';

const initialProps: InformationProps = {
  label: 'some label',
  value: 'some value',
};

describe('<Information />', () => {
  it('should renders default layout properly', () => {
    const { getByText } = render(<Information {...initialProps} />);

    expect(getByText(initialProps.label)).toBeInTheDocument();
    expect(getByText(initialProps.value)).toBeInTheDocument();
  });
});

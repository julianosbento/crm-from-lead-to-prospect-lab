import { render } from '@testing-library/react';

import Information from '../information';
import type { InformationProps } from '../information';
import { colors } from '../../../../../tokens/colors';

const initialProps: InformationProps = {
  label: 'some label',
  value: 'some value',
};

describe('<Information />', () => {
  it('should renders default layout properly', () => {
    const { getByText } = render(<Information {...initialProps} />);

    expect(getByText(initialProps.label)).toBeInTheDocument();

    expect(getByText(initialProps.value)).toBeInTheDocument();
    expect(getByText(initialProps.value)).toHaveStyle({ color: colors.text });
  });

  colors;
  it('should renders layout with valueColor prop properly', () => {
    const { getByText } = render(<Information {...initialProps} valueColor={colors.success} />);

    expect(getByText(initialProps.label)).toBeInTheDocument();

    expect(getByText(initialProps.value)).toBeInTheDocument();
    expect(getByText(initialProps.value)).toHaveStyle({ color: colors.success });
  });
});

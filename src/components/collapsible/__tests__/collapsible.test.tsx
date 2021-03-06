import { fireEvent, render } from '@testing-library/react';

import Collapsible from '../collapsible';

import type { CollapsibleProps } from 'react-collapsible';

const initialProps: CollapsibleProps = {
  trigger: 'some trigger',
  onTriggerClosing: jest.fn(),
  onTriggerOpening: jest.fn(),
};

describe('<Collapsible />', () => {
  it('should renders default layout properly', () => {
    const { getByText } = render(
      <Collapsible {...initialProps}>
        <p>Test</p>
      </Collapsible>
    );

    expect(getByText('some trigger')).toBeInTheDocument();
    expect(getByText('some trigger')).toHaveClass('is-closed');
    expect(getByText('some trigger')).not.toHaveClass('is-open');

    expect(getByText('Test')).toBeInTheDocument();
  });

  it('should renders opened layout properly', () => {
    const { getByText } = render(
      <Collapsible {...initialProps} open>
        <p>Test</p>
      </Collapsible>
    );

    expect(getByText('some trigger')).toBeInTheDocument();
    expect(getByText('some trigger')).not.toHaveClass('is-closed');
    expect(getByText('some trigger')).toHaveClass('is-open');

    expect(getByText('Test')).toBeInTheDocument();
  });

  it('should trigger onTriggerClosing and onTriggerOpening handlers when interact with collapsible properly', () => {
    const { getByText } = render(
      <Collapsible {...initialProps}>
        <p>Test</p>
      </Collapsible>
    );

    const collapsible = getByText('some trigger');

    fireEvent.click(collapsible);

    expect(initialProps.onTriggerOpening).toHaveBeenCalledTimes(1);

    fireEvent.click(collapsible);

    expect(initialProps.onTriggerClosing).toHaveBeenCalledTimes(1);
  });
});

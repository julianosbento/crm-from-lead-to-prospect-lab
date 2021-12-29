import { render } from '@testing-library/react';

import Home from '../home';

describe('<Home />', () => {
  it('should renders default layout properly', () => {
    const { getByText } = render(<Home />);
    // expect(getByText(initialProps.text!)).toBeInTheDocument();
  });
});

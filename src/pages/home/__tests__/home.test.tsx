import { render } from '@testing-library/react';

import Home from '../home';

import { leads } from '../../../../api/db.json';

const mockUseHomeScreen = jest.fn();

jest.mock('../home.hook', () => () => mockUseHomeScreen());

describe('<Home />', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    mockUseHomeScreen.mockReturnValue({ leads });
  });

  it('should renders default layout properly', () => {
    const { getByText, getAllByText } = render(<Home />);

    expect(getAllByText('birth date')).toHaveLength(leads.length);
    expect(getAllByText('email')).toHaveLength(leads.length);
    expect(getAllByText('name')).toHaveLength(leads.length);
    expect(getAllByText('gender')).toHaveLength(leads.length);
    expect(getAllByText('nid')).toHaveLength(leads.length);
    expect(getAllByText('phone')).toHaveLength(leads.length);
    expect(getAllByText('score')).toHaveLength(leads.length);

    expect(getByText('validate leads')).toBeInTheDocument();

    expect(getByText('leads')).toBeInTheDocument();
    expect(getByText('validate leads')).toBeInTheDocument();
  });

  it('should renders layout with prospects properly', () => {
    mockUseHomeScreen.mockReturnValue({
      leads: [leads[0], leads[1], leads[2]],
      prospects: [leads[3], leads[4], leads[5]],
    });

    const { getByText, getAllByText } = render(<Home />);

    expect(getAllByText('birth date')).toHaveLength(6);
    expect(getAllByText('email')).toHaveLength(6);
    expect(getAllByText('name')).toHaveLength(6);
    expect(getAllByText('gender')).toHaveLength(6);
    expect(getAllByText('nid')).toHaveLength(6);
    expect(getAllByText('phone')).toHaveLength(6);
    expect(getAllByText('score')).toHaveLength(6);

    expect(getByText('leads')).toBeInTheDocument();
    expect(getByText('validate leads')).toBeInTheDocument();

    expect(getByText('prospects')).toBeInTheDocument();
  });
});

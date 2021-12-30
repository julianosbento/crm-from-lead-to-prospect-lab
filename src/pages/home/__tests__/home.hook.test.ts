import { act, renderHook } from '@testing-library/react-hooks';

import useHomeScreen from '../home.hook';

import { leads } from '../../../../api/db.json';

const mockDispatch = jest.fn();
const mockUseSelector = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: (callback: any) => mockUseSelector(callback),
}));

const mockApplicationState = {
  leadsAndProspects: {
    leads: [leads[0], leads[1], leads[2]],
    prospects: [leads[3], leads[4], leads[5]],
  },
};

describe('pages/home/home.hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    mockUseSelector.mockImplementation((callback) => callback(mockApplicationState));
  });

  it('should return default values properly', () => {
    const { result } = renderHook(() => useHomeScreen());

    expect(result.current.leads).toBe(mockApplicationState.leadsAndProspects.leads);
    expect(result.current.prospects).toBe(mockApplicationState.leadsAndProspects.prospects);
    expect(result.current.handleLeadsValidation).toEqual(expect.any(Function));

    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });

  it('should call dispatch function when handleLeadsValidation is triggered', () => {
    const { result } = renderHook(() => useHomeScreen());

    act(() => result.current.handleLeadsValidation());

    expect(mockDispatch).toHaveBeenCalledTimes(2);
  });
});

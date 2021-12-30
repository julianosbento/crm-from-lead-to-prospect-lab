import { get } from '../api';
import { ENDPOINTS } from '../endpoints';

import { leads } from '../../../api/db.json';

const mockGet = jest.fn();

jest.mock('axios', () => ({ get: () => mockGet() }));

const mockedResolvedGetValue = { data: leads };
const url = `${ENDPOINTS.BASE}/${ENDPOINTS.LEADS}`;
const errorMessage = 'Some error message here';

describe('services/api', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockGet.mockResolvedValue(mockedResolvedGetValue);
  });

  it('should call axios get when api get is called with success', async () => {
    const response = await get(url, errorMessage);

    expect(response).toEqual(mockedResolvedGetValue.data);

    expect(mockGet).toHaveBeenCalledTimes(1);
  });

  it('should call axios get when api get is called with error', async () => {
    mockGet.mockImplementation(() => new Error('Error'));

    try {
      await get(url, errorMessage);
    } catch (error) {
      expect(console.error).toHaveBeenCalledTimes(1);
      //@ts-ignore
      expect(console.error).toHaveBeenCalledWith(`${errorMessage} ${error.message}`);
      expect(mockGet).toHaveBeenCalledTimes(1);
    }
  });
});

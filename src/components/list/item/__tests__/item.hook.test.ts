import { act, renderHook } from '@testing-library/react-hooks';

import useItemComponent from '../item.hook';

describe('components/list/item/item.hook', () => {
  it('should return default values properly', () => {
    const { result } = renderHook(() => useItemComponent());

    expect(result.current.opened).toBe(false);
  });

  it('should return opened true when handleOpened receive open value properly', () => {
    const { result } = renderHook(() => useItemComponent());

    expect(result.current.opened).toBe(false);

    act(() => result.current.handleOpened(true));

    expect(result.current.opened).toBe(true);
  });
});

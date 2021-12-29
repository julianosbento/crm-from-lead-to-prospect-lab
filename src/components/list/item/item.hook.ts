import { useState } from 'react';

export interface UseItemComponent {
  opened: boolean;
  handleOpened: () => void;
}

export default function useItemComponent() {
  const [opened, setOpened] = useState(false);

  function handleOpened(open: boolean) {
    setOpened(open);
  }

  return { opened, handleOpened };
}

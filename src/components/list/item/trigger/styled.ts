import styled from 'styled-components';

import { colors } from '../../../../tokens/colors';

interface WrapperProps {
  opened: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  background-color: ${colors.secondary};
  ${({ opened }) =>
    opened
      ? `
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      `
      : 'border-radius: 4px'};
  box-shadow: 0 2px 3px 0 rgb(0 0 0 / 50%);
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 4px;

  :hover {
    background-color: ${colors.background};
  }
`;

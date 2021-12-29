import styled from 'styled-components';

import { colors } from '../../../../tokens/colors';

export const Wrapper = styled.li`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding: 8px;

  > :first-child {
    color: ${colors.text};
    font-size: 10px;
    font-weight: 700;
  }

  > :last-child {
    color: ${colors.text};
    font-size: 12px;

    :hover,
    :focus {
      transform: scale(1.2);
    }
  }

  > p {
    margin: 0;
  }
`;

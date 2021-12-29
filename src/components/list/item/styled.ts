import styled from 'styled-components';

import { colors } from '../../../tokens/colors';

export const Container = styled.div`
  background-color: ${colors.secondary};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 4px;
`;

import styled from 'styled-components';

import { colors } from '../../tokens/colors';

export const Wrapper = styled.div`
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
  height: 100%;

  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 20px;
`;

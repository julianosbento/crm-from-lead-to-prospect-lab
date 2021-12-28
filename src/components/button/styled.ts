import styled from 'styled-components';

interface WrapperProps {
  color: string;
  fontSize: number;
}

export const Wrapper = styled.div<WrapperProps>`
  background-color: transparent;
  border-color: ${({ color }) => color};
  border-style: solid;
  border-radius: 8px;
  border-width: 0.5px;

  > p {
    color: ${({ color }) => color};
    font-size: ${({ fontSize }) => fontSize}px;
    margin: 4px 16px;
  }
  :hover {
    opacity: 0.7;
  }
`;

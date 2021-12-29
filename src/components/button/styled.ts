import styled from 'styled-components';

interface ButtonProps {
  color: string;
  fontSize: number;
}

export const Button = styled.button<ButtonProps>`
  background-color: transparent;
  border-color: ${({ color }) => color};
  border-style: solid;
  border-radius: 8px;
  border-width: 0.5px;
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize}px;
  height: 32px;
  padding: 4px 16px;

  :hover {
    opacity: 0.7;
  }
`;

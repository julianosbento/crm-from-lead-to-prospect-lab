import React from 'react';

import * as S from './styled';

export interface ButtonProps {
  color: string;
  fontSize?: number;
  text: string;
  onClick: () => void;
}

function Button({ text, color, fontSize = 12, onClick }: ButtonProps) {
  return (
    <S.Wrapper color={color} fontSize={fontSize} onClick={onClick}>
      <p>{text}</p>
    </S.Wrapper>
  );
}

export default Button;

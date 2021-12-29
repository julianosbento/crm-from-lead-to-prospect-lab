import React from 'react';
import { colors } from '../../tokens/colors';

import * as S from './styled';

export interface ButtonProps {
  color?: string;
  fontSize?: number;
  text: string;
  onClick: () => void;
}

function Button({ color = colors.success, fontSize = 12, text, onClick }: ButtonProps) {
  return (
    <S.Button color={color} fontSize={fontSize} onClick={onClick}>
      {text}
    </S.Button>
  );
}

export default Button;

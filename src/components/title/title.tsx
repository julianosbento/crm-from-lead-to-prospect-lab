import React from 'react';

import * as S from './styled';

export interface TitleProps {
  title: string;
}

function Title({ title }: TitleProps) {
  return <S.Title>{title}</S.Title>;
}

export default Title;

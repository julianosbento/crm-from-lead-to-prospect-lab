import React from 'react';

import * as S from './styled';

export interface ExampleProps {
  text?: string;
}

function Example({ text = 'example' }: ExampleProps) {
  return <S.Wrapper>{text}</S.Wrapper>;
}

export default Example;

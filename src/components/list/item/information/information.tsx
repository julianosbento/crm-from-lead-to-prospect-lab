import React from 'react';

import * as S from './styled';

export interface InformationProps {
  label: string;
  value: string;
}

function Information({ label, value }: InformationProps) {
  return (
    <S.Wrapper>
      <p>{label}</p>
      <p>{value}</p>
    </S.Wrapper>
  );
}

export default Information;

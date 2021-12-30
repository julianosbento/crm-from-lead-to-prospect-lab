import React from 'react';

import * as S from './styled';

export interface InformationProps {
  label: string;
  value: string;
  valueColor?: string;
}

function Information({ label, value, valueColor }: InformationProps) {
  return (
    <S.Wrapper valueColor={valueColor}>
      <p>{label}</p>
      <p>{value}</p>
    </S.Wrapper>
  );
}

export default Information;

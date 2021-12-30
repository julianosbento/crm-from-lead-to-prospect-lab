import React from 'react';

import { Information } from '../information';

import { colors } from '../../../../tokens/colors';

import * as S from './styled';

import type { Lead } from '../../../../types/information';

export interface TriggerProps extends Omit<Lead, 'birthDate' | 'gender' | 'name' | 'nid'> {
  opened: boolean;
}

function Trigger({ email, firstName, lastName, opened, phone, score }: TriggerProps) {
  return (
    <S.Wrapper opened={opened}>
      <Information
        label="score"
        value={score.toString()}
        valueColor={score >= 60 ? colors.success : colors.error}
      />
      <Information label="name" value={`${firstName} ${lastName}`} />
      <Information label="email" value={email} />
      <Information label="phone" value={phone} />
    </S.Wrapper>
  );
}

export default Trigger;

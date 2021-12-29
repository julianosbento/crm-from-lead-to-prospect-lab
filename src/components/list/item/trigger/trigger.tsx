import React from 'react';
import { Information } from '../information';

import type { Lead } from '../../../../types/information';

import * as S from './styled';

export interface TriggerProps extends Omit<Lead, 'birthDate' | 'gender' | 'nid'> {
  opened: boolean;
}

function Trigger({ email, firstName, lastName, opened, phone }: TriggerProps) {
  return (
    <S.Wrapper opened={opened}>
      <Information label="email" value={email} />
      <Information label="name" value={`${firstName} ${lastName}`} />
      <Information label="phone" value={phone} />
    </S.Wrapper>
  );
}

export default Trigger;

import React from 'react';

import * as S from './styled';

import { Collapsible } from '../../collapsible';

import { Information } from './information';
import { Trigger } from './trigger';
import useItemComponent from './item.hook';

import type { Lead } from '../../../types/information';

function Item({ birthDate, email, firstName, gender, lastName, nid, phone }: Lead) {
  const { opened, handleOpened } = useItemComponent();

  return (
    <Collapsible
      trigger={
        <Trigger
          firstName={firstName}
          lastName={lastName}
          email={email}
          opened={opened}
          phone={phone}
        />
      }
      onTriggerOpening={() => handleOpened(true)}
      onClosing={() => handleOpened(false)}
    >
      <S.Container>
        <Information label="birth date" value={birthDate} />
        <Information label="gender" value={gender} />
        <Information label="nid" value={nid} />
      </S.Container>
    </Collapsible>
  );
}

export default Item;

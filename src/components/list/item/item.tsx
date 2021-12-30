import React from 'react';

import moment from 'moment';

import * as S from './styled';

import { Collapsible } from '../../collapsible';

import { Information } from './information';
import { Trigger } from './trigger';
import useItemComponent from './item.hook';

import type { Lead } from '../../../types/information';
import { formatDate } from '../../../utils/date';

function Item({ birthDate, email, firstName, gender, lastName, nid, phone, score }: Lead) {
  const { opened, handleOpened } = useItemComponent();

  const formattedBirthDate = formatDate(birthDate);

  return (
    <Collapsible
      trigger={
        <Trigger
          firstName={firstName}
          lastName={lastName}
          email={email}
          opened={opened}
          phone={phone}
          score={score}
        />
      }
      onTriggerOpening={() => handleOpened(true)}
      onClosing={() => handleOpened(false)}
    >
      <S.Container>
        <Information label="birth date" value={formattedBirthDate} />
        <Information label="gender" value={gender} />
        <Information label="nid" value={nid} />
      </S.Container>
    </Collapsible>
  );
}

export default Item;

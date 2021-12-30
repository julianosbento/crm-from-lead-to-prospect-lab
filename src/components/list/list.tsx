import React from 'react';

import { Button } from '../button';
import { Title } from '../title';
import { Item } from './item';

import * as S from './styled';

import type { Lead } from '../../types/information';
import type { ButtonProps } from '../button/button';

export interface ListProps {
  button?: ButtonProps;
  data: Lead[];
  title: string;
}

function List({ button, data, title }: ListProps) {
  return (
    <S.Wrapper>
      <S.Container>
        <Title title={title} />
        {!!button && <Button {...button} />}
      </S.Container>
      {data?.map((props) => (
        <S.ItemContainer>
          <Item key={props.nid} {...props} />
        </S.ItemContainer>
      ))}
    </S.Wrapper>
  );
}

export default List;

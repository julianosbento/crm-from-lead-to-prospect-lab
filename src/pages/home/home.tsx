import React from 'react';

import { List } from '../../components/list';
import useHomeScreen from './home.hook';

import * as S from './styled';

function Home() {
  const { leads, prospects, handleLeadsValidation } = useHomeScreen();

  return (
    <S.Wrapper>
      <S.Container>
        <List
          button={{ text: 'validate leads', onClick: handleLeadsValidation }}
          data={leads}
          title="leads"
        />
      </S.Container>
      <S.Container>
        <List data={prospects} title="prospects" />
      </S.Container>
    </S.Wrapper>
  );
}

export default Home;

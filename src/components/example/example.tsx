import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { exampleAct, exampleSelectors } from '../../store/ducks/example';

import * as S from './styled';

export interface ExampleProps {
  text?: string;
}

function Example() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(exampleAct.getExample());
  }, []);

  const example = useSelector(exampleSelectors.getExample);
  return <S.Wrapper>{example}</S.Wrapper>;
}

export default Example;

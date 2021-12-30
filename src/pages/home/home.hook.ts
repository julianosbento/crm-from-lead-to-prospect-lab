import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  leadsAndProspectsAct,
  leadsAndProspectsSelectors,
} from '../../store/ducks/leads-and-prospects';

import type { Lead } from '../../types/information';

export interface UseHomeScreen {
  leads: Lead[];
  prospects: Lead[];
  handleLeadsValidation: () => void;
}

export default function useHomeScreen(): UseHomeScreen {
  const dispatch = useDispatch();

  const leads = useSelector(leadsAndProspectsSelectors.getLeads);
  const prospects = useSelector(leadsAndProspectsSelectors.getProspects);

  function handleLeadsValidation() {
    dispatch(leadsAndProspectsAct.validateLeads());
  }

  useEffect(() => {
    dispatch(leadsAndProspectsAct.getLeads());
  }, []);

  return { leads, prospects, handleLeadsValidation };
}

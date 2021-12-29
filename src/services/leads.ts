import { get } from './api';
import { ENDPOINTS } from './endpoints';

import type { LeadsResponse } from '../types/information';

export async function getLeads(): Promise<LeadsResponse[]> {
  return await get(`${ENDPOINTS.BASE}/${ENDPOINTS.LEADS}`, 'Failed to get leads with error');
}

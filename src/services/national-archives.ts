import { get } from './api';
import { ENDPOINTS } from './endpoints';

export async function getNationalArchives() {
  await get(`${ENDPOINTS.BASE}/${ENDPOINTS.NATIONAL_ARCHIVES}`, 'Failed to get national archives with error');
}

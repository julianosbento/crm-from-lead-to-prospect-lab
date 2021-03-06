import { get } from './api';
import { ENDPOINTS } from './endpoints';

export async function getNationalRegistries() {
  return await get(
    `${ENDPOINTS.BASE}/${ENDPOINTS.NATIONAL_REGISTRY}`,
    'Failed to get national registries with error'
  );
}

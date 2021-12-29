import type { Lead, LeadsResponse } from '../../../types/information';

export function buildLeadsAndProspectsData(leadsResponse: LeadsResponse[]): Lead[] {
  return leadsResponse.map((lead) => {
    const splittedName = lead.name.split(' ');
    return {
      ...lead,
      birthDate: lead.birth_date,
      firstName: splittedName[0],
      lastName: splittedName[splittedName.length - 1],
    };
  });
}

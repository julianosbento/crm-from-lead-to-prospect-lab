import type {
  Lead,
  LeadsResponse,
  NationalRegistryResponse,
  NationalArchivesResponse,
} from '../../../types/information';

interface FilterLeadsAndProspectsResponse {
  leads: Lead[];
  prospects: Lead[];
}

export function buildLeadsAndProspectsData(leadsResponse: LeadsResponse): Lead[] {
  return leadsResponse.map(({ id, ...lead }) => {
    const splitName = lead.name.split(' ');
    return {
      ...lead,
      birthDate: lead.birth_date,
      firstName: splitName[0],
      lastName: splitName[splitName.length - 1],
    };
  });
}

export function validateLeads(
  leads: Lead[],
  nationalRegistriesResponse: NationalRegistryResponse,
  nationalArchivesResponse: NationalArchivesResponse
): Lead[] {
  const SUBTRACT_POINTS_FOR_DIFF_FIELDS = 25;

  return leads.map((lead) => {
    let score = 100;

    const leadInNationalRegistries = nationalRegistriesResponse.find(
      ({ nid, name }) => lead.nid === nid || lead.name === name
    );

    const leadInNationalArchives = nationalArchivesResponse.find(
      ({ nid, name }) => lead.nid === nid || lead.name === name
    );

    if (leadInNationalArchives) score = score - SUBTRACT_POINTS_FOR_DIFF_FIELDS * 2;

    if (!leadInNationalRegistries) return { ...lead, score: 0 };

    if (leadInNationalRegistries.name !== lead.name)
      score = score - SUBTRACT_POINTS_FOR_DIFF_FIELDS;
    if (leadInNationalRegistries.nid !== lead.nid) score = score - SUBTRACT_POINTS_FOR_DIFF_FIELDS;
    if (leadInNationalRegistries.birth_date !== lead.birthDate)
      score = score - SUBTRACT_POINTS_FOR_DIFF_FIELDS;

    return { ...lead, score };
  });
}

export function filterLeadsAndProspects(leads: Lead[]): FilterLeadsAndProspectsResponse {
  const SCORE_THRESHOLD = 60;

  const lowScoreLeads = leads.filter(({ score }) => score! <= SCORE_THRESHOLD);
  const highScoreLeads = leads.filter(({ score }) => score! >= SCORE_THRESHOLD);

  return { leads: lowScoreLeads, prospects: highScoreLeads };
}

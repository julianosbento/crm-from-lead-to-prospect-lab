import { buildLeadsAndProspectsData, validateLeads, filterLeadsAndProspects } from '../utils';

import {
  expectedLead,
  expectedLeads,
  expectedLeadsResponse,
  expectedNationalArchives,
  expectedNationalRegistries,
  expectedNationalRegistriesWithDifferentName,
} from './dummy';

describe('store/ducks/leads-and-prospects/utils', () => {
  it('should return formatted lead passing leads response as parameter', async () => {
    const leads = buildLeadsAndProspectsData(expectedLeadsResponse);

    expect(leads).toEqual(expectedLeads);
  });

  it('should return leads with score calculated passing leads, national registries and national archives, with empty registers in national archives', async () => {
    const leads = validateLeads(expectedLeads, expectedNationalRegistries, []);

    expect(leads).toEqual([{ ...expectedLeads[0], score: 100 }]);
  });

  it('should return leads with score calculated passing leads, national registries and national archives, with empty registers in national archives, with empty registers in national archives and different name in national registry', async () => {
    const leads = validateLeads(expectedLeads, expectedNationalRegistriesWithDifferentName, []);

    expect(leads).toEqual([{ ...expectedLeads[0], score: 75 }]);
  });

  it('should return leads with score calculated passing leads, national registries and national archives', async () => {
    const leads = validateLeads(
      expectedLeads,
      expectedNationalRegistries,
      expectedNationalArchives
    );

    expect(leads).toEqual([{ ...expectedLeads[0], score: 50 }]);
  });

  it('should return leads and prospects filtered by score', async () => {
    const lowScoreLead = { ...expectedLead, score: 25 };
    const highScoreLead = { ...expectedLead, score: 75 };
    const { leads, prospects } = filterLeadsAndProspects([
      lowScoreLead,
      lowScoreLead,
      highScoreLead,
      highScoreLead,
      highScoreLead,
    ]);

    expect(leads).toHaveLength(2);
    expect(prospects).toHaveLength(3);
  });
});

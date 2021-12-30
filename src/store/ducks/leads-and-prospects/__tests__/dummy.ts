import { national_registry, national_archives } from '../../../../../api/db.json';
import { GENDER } from '../../../../constants/information';

import type { Lead } from '../../../../types/information';

export const expectedLeadResponse = {
  id: '957d1062-7163-419f-83f9-64175a3cc1f5',
  birth_date: '1994-08-14',
  email: 'john@doe.com',
  gender: GENDER.MALE,
  name: 'John Edwards Doe',
  nid: '01234567',
  phone: '+57 (103)-9403209',
  score: 0,
};

const splitLeadResponseName = expectedLeadResponse.name.split(' ');

const { id, ...expectedLeadResponseWithoutId } = expectedLeadResponse;

export const expectedLead: Lead = {
  ...expectedLeadResponseWithoutId,
  birthDate: expectedLeadResponse.birth_date,
  firstName: splitLeadResponseName[0],
  lastName: splitLeadResponseName[splitLeadResponseName.length - 1],
};

export const expectedNationalRegistry = {
  id: '957d1062-7163-419f-83f9-64175a3cc1f5',
  birth_date: '1994-08-14',
  gender: GENDER.MALE,
  name: 'John Edwards Doe',
  nid: '01234567',
};

export const expectedNationalArchive = {
  id: '957d1062-7163-419f-83f9-64175a3cc1f5',
  birth_date: '1994-08-14',
  gender: GENDER.MALE,
  name: 'John Edwards Doe',
  nid: '01234567',
};

export const expectedLeads = [expectedLead];
export const expectedLeadsResponse = [expectedLeadResponse];
export const expectedProspects = [expectedLead];
export const expectedNationalRegistries = [expectedNationalRegistry];
export const expectedNationalRegistriesWithDifferentName = [
  { ...expectedNationalRegistry, name: 'John Edwards' },
];
export const expectedNationalArchives = [expectedNationalArchive];

import { GENDER } from '../constants/information';

export type Gender = typeof GENDER[keyof typeof GENDER];

export interface Lead {
  birthDate: string;
  email: string;
  firstName: string;
  gender: Gender;
  lastName: string;
  nid: string;
  phone: string;
}

export interface LeadsResponse {
  birth_date: string;
  email: string;
  gender: Gender;
  name: string;
  nid: string;
  phone: string;
}

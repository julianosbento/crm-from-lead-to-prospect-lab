import { GENDER } from '../constants/information';

export type Gender = typeof GENDER[keyof typeof GENDER];

export interface Lead {
  birthDate: string;
  email: string;
  firstName: string;
  gender: Gender;
  lastName: string;
  name: string;
  nid: string;
  phone: string;
  score: number;
}

export type LeadResponse = {
  id: string;
  birth_date: string;
  email: string;
  gender: Gender;
  name: string;
  nid: string;
  phone: string;
  score: number;
};

export type LeadsResponse = Array<LeadResponse>;

export type NationalRegistryResponse = Array<Omit<LeadResponse, 'email' | 'phone' | 'score'>>;

export type NationalArchivesResponse = Array<Omit<LeadResponse, 'email' | 'phone' | 'score'>>;

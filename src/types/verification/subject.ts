import { SubjectType } from "./enums";

export interface VerificationSubject {

  subjectType: SubjectType;

  displayName: string;

  country: string;

  registrationNumber?: string;

  idNumber?: string;

  passportNumber?: string;

  companyName?: string;

  fullName?: string;
}
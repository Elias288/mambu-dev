import { v4 as uuidv4 } from 'uuid';

export class ClientDto {
  id: string;
  encodedKey: string;
  firstName: string;
  lastName: string;
  middleName: string;
  homePhone: string;
  mobilePhone: string;
  emailaddress: string;
  birthDate: string;
  gender: string;
  notes: string;
  address: [];

  constructor(data?: any) {
    this.id = data?.id ?? '';
    this.encodedKey = data?.encodedKey ?? uuidv4();
    this.firstName = data?.firstName ?? '';
    this.lastName = data?.lastName ?? '';
    this.middleName = data?.middleName ?? '';
    this.homePhone = data?.homePhone ?? '';
    this.mobilePhone = data?.mobilePhone ?? '';
    this.emailaddress = data?.emailAddress ?? '';
    this.birthDate = data?.birthDate ?? '';
    this.gender = data?.gender ?? '';
    this.notes = data?.notes ?? '';
  }
}

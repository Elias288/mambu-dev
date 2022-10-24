import { v4 as uuidv4 } from 'uuid';
import { Address } from '../entity/address.entity';
import { IdDocument } from '../entity/idDocument.entity';

export class ClientDto {
  id: string;
  encodedKey: string;
  externalId: string;

  firstName: string;
  lastName: string;
  middleName: string;
  homePhone: string;
  mobilePhone: string;
  emailAddress: string;
  birthDate: string;
  gender: string;
  notes: string;
  preferredLanguage: string;

  addresses: Address[];
  idDocuments: IdDocument[];

  constructor(data?: any) {
    this.encodedKey = data?.encodedKey ?? uuidv4();
    this.id = data?.id ?? '';
    this.externalId = data?.externalId ?? uuidv4();

    this.firstName = data?.firstName ?? '';
    this.lastName = data?.lastName ?? '';
    this.gender = data?.gender ?? '';

    this.middleName = data?.middleName ?? '';
    this.homePhone = data?.homePhone ?? '';
    this.mobilePhone = data?.mobilePhone ?? '';
    this.emailAddress = data?.emailAddress ?? '';
    this.birthDate = data?.birthDate ?? '';
    this.notes = data?.notes ?? '';
    this.addresses = data?.addresses ?? [];
    this.idDocuments = data?.idDocuments ?? [];
    this.preferredLanguage = data?.preferredLanguage ?? '';
  }
}

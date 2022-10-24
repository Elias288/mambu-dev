import { Address } from '../entity/address.entity';
import { IdDocument } from '../entity/idDocument.entity';

export class CreateClientDto {
  encodedKey: string;
  id: string;
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

  _personalizados?: {
    External_ID: string;
  };
}

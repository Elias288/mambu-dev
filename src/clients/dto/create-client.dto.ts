export class CreateClientDto {
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
  _personalizados: {
    External_ID: string;
  };
}

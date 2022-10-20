import { ClientDto } from 'src/clients/dto/client.dto';
import { Client } from 'src/clients/entity/client.entity';

export class AppUtils {
  ClientToClientDto(client: Client): ClientDto {
    const clientDto = new ClientDto();
    clientDto.firstName = client.firstName;
    clientDto.middleName = client.middleName;
    clientDto.lastName = client.lastName;
    clientDto.birthDate = client.birtDate;
    clientDto.emailaddress = client.emailaddress;
    clientDto.gender = client.gender;
    clientDto.homePhone = client.homePhone;
    clientDto.mobilePhone = client.mobilePhone;
    clientDto.notes = client.notes;
    return clientDto;
  }
}

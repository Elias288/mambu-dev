import { ClientDto } from 'src/clients/dto/client.dto';
import { CreateClientDto } from 'src/clients/dto/create-client.dto';
import { Client } from 'src/clients/entity/client.entity';
import { v4 as uuidv4 } from 'uuid';

export class AppUtils {
  ClientToClientDto(client: Client): ClientDto {
    const clientDto = new ClientDto();
    clientDto.firstName = client.firstName;
    clientDto.middleName = client.middleName;
    clientDto.lastName = client.lastName;
    clientDto.birthDate = client.birthDate;
    clientDto.emailAddress = client.emailAddress;
    clientDto.gender = client.gender;
    clientDto.homePhone = client.homePhone;
    clientDto.mobilePhone = client.mobilePhone;
    clientDto.notes = client.notes;
    return clientDto;
  }

  ClientDtoToClientEnity(clientDto: ClientDto | CreateClientDto) {
    const client = new Client();
    client.encodedKey = clientDto?.encodedKey ?? uuidv4();
    client.id = clientDto.id ?? '';

    if ('_personalizados' in clientDto) {
      client.externalId = clientDto._personalizados.External_ID;
    }
    if ('externalId' in clientDto) {
      client.externalId = clientDto.externalId;
    }

    client.firstName = clientDto.firstName;
    client.middleName = clientDto?.middleName ?? '';
    client.lastName = clientDto.lastName;
    client.birthDate = clientDto?.birthDate ?? '';
    client.emailAddress = clientDto.emailAddress;
    client.gender = clientDto.gender;
    client.homePhone = clientDto?.homePhone ?? '';
    client.mobilePhone = clientDto?.mobilePhone;
    client.notes = clientDto?.notes ?? '';
    return client;
  }
}

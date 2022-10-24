import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateClientDto } from 'src/clients/dto/create-client.dto';
import { Address } from 'src/clients/entity/address.entity';
import { Client } from 'src/clients/entity/client.entity';
import { IdDocument } from 'src/clients/entity/idDocument.entity';
import { AppUtils } from 'src/utils/app.utils';
import { Repository, DataSource } from 'typeorm';

@Injectable()
export class ClientMysqlService {
  constructor(
    private appUtils: AppUtils,
    private readonly config: ConfigService,
    private readonly httpService: HttpService,
    private readonly dataSource: DataSource,
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  async getAllClients() {
    const list = await this.clientRepository.find();
    if (!list.length) {
      throw new NotFoundException({
        message: 'no se encontraron clientes en la bd',
      });
    }
    return list;
  }

  save(createClientDto: CreateClientDto) {
    const clientEntity = this.appUtils.ClientDtoToClientEnity(createClientDto);

    const addresses = createClientDto.addresses.map((address) => {
      const newAddress = new Address();
      newAddress.encodedKey = address?.encodedKey ?? '';

      newAddress.line1 = address.line1;
      newAddress.city = address.city;
      newAddress.country = address.country;
      newAddress.postcode = address.postcode;

      newAddress.line2 = address?.line2 ?? '';
      newAddress.region = address?.region ?? '';

      this.clientRepository.manager.save(newAddress);
      return newAddress;
    });

    const idDocuments = createClientDto.idDocuments.map((idDocuments) => {
      const newIdDocument = new IdDocument();
      newIdDocument.encodedKey = idDocuments?.encodedKey ?? '';
      newIdDocument.documentType = idDocuments.documentType;
      newIdDocument.documentId = idDocuments.documentId;
      newIdDocument.validUntil = idDocuments?.validUntil ?? '';
      newIdDocument.issuingAuthority = idDocuments.issuingAuthority;

      this.clientRepository.manager.save(newIdDocument);
      return newIdDocument;
    });

    clientEntity.addresses = addresses;
    clientEntity.idDocuments = idDocuments;

    return this.clientRepository.manager.save(clientEntity);
  }
}

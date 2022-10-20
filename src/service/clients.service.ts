import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateClientDto } from 'src/clients/dto/create-client.dto';

@Injectable()
export class ClientsService {
  constructor(
    private readonly config: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  private headers = {
    headers: {
      Accept: 'application/vnd.mambu.v2+json',
      apikey: this.config.get<string>('API_KEY'),
    },
  };

  create(data: CreateClientDto) {
    return data;
  }
}

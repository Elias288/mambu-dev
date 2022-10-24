import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { catchError, firstValueFrom } from 'rxjs';
import { ClientDto } from 'src/clients/dto/client.dto';
import { CreateClientDto } from 'src/clients/dto/create-client.dto';
import { Client } from 'src/clients/entity/client.entity';

@Injectable()
export class MambuService {
  constructor(
    private readonly config: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  private data = {
    Accept: 'application/vnd.mambu.v2+json',
    apikey: this.config.get<string>('API_KEY'),
  };

  private urlmambu = this.config.get<string>('URL_MAMBU');

  async getAllClients(): Promise<ClientDto[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<Client[]>(
        `${this.urlmambu}/clients?offset=0&limit=10&paginationDetails=OFF&detailsLevel=FULL`,
        { headers: this.data },
      ),
    );
    return data.map((res) => {
      return new ClientDto(res);
    });
  }

  async getClientById(clientId: string): Promise<ClientDto> {
    const { data } = await firstValueFrom(
      this.httpService.get<Client>(
        `${this.urlmambu}/clients/${clientId}?detailsLevel=FULL`,
        { headers: this.data },
      ),
    );
    return new ClientDto(data);
  }

  async save(client: CreateClientDto): Promise<ClientDto> {
    const { data } = await firstValueFrom(
      this.httpService
        .post<ClientDto>(`${this.urlmambu}/clients`, client, {
          headers: this.data,
        })
        .pipe(
          catchError((error) => {
            console.log(error.response.data);
            throw 'An error happened!';
          }),
        ),
    );
    return data;
  }
}

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom, map } from 'rxjs';
import { ClientDto } from 'src/clients/dto/client.dto';

@Injectable()
export class MambuService {
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

  async findAllClients(): Promise<ClientDto[]> {
    const urlmambu = this.config.get<string>('URL_MAMBU');

    const response = await this.httpService
      .get(
        `${urlmambu}/clients?offset=0&limit=10&paginationDetails=OFF&detailsLevel=FULL`,
        this.headers,
      )
      .pipe(
        map((res) => {
          return res.data.map((data) => {
            return new ClientDto(data);
          });
        }),
      );

    return firstValueFrom(response);
  }
}

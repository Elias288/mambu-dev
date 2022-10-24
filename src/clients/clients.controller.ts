import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
import { MambuService } from 'src/service/mambu.service';
import { JoiValidationPipe } from 'src/utils/JoiValidationPipe';
import { ClientMysqlService } from '../service/client-mysql.service';
import { CreateClientDto } from './dto/create-client.dto';
import { createClientSchema } from './schema/create-client.schema';

@Controller('clients')
export class ClientsController {
  constructor(
    private readonly mysqlService: ClientMysqlService,
    private readonly mambuService: MambuService,
  ) {}

  @Get('/mambu')
  findAllMambu() {
    return this.mambuService.getAllClients();
  }

  @Get('/msql')
  findAllMysql() {
    return this.mysqlService.getAllClients();
  }

  @Get('/mambu/:id')
  async findById(@Param('id') id: string) {
    return this.mambuService.getClientById(id);
  }

  @Post()
  @UsePipes(new JoiValidationPipe(createClientSchema))
  async create(@Body() createClientDto: CreateClientDto) {
    const savedClient: CreateClientDto = await this.mambuService.save(
      createClientDto,
    );
    return this.mysqlService.save(savedClient);
  }

  @Post('/save/:id')
  async findAndSave(@Param('id') id: string) {
    const createClientDto: CreateClientDto =
      await this.mambuService.getClientById(id);
    return this.mysqlService.save(createClientDto);
  }
}

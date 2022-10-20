import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
import { MambuService } from 'src/service/mambu.service';
import { JoiValidationPipe } from 'src/utils/JoiValidationPipe';
import { ClientsService } from '../service//clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { createClientSchema } from './schema/create-client.schema';

@Controller('clients')
export class ClientsController {
  constructor(
    private readonly clientService: ClientsService,
    private readonly mambuService: MambuService,
  ) {}

  @Get()
  findAll() {
    return this.mambuService.findAllClients();
  }

  @Get('/:id')
  async findById(@Param('id') id: number) {
    throw new Error('not implemented yet' + id);
  }

  @Post()
  @UsePipes(new JoiValidationPipe(createClientSchema))
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientService.create(createClientDto);
  }
}

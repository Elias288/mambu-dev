import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsController } from './clients.controller';
import { ClientsService } from '../service/clients.service';
import { Address, Client } from './entity/client.entity';
import { MambuService } from 'src/service/mambu.service';

@Module({
  imports: [
    ConfigModule,
    HttpModule,
    TypeOrmModule.forFeature([Client, Address]),
  ],
  controllers: [ClientsController],
  providers: [ClientsService, ClientsService, MambuService],
})
export class ClientsModule {}

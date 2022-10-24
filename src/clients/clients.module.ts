import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsController } from './clients.controller';
import { ClientMysqlService } from '../service/client-mysql.service';
import { Client } from './entity/client.entity';
import { MambuService } from 'src/service/mambu.service';
import { AppUtils } from 'src/utils/app.utils';
import { Address } from './entity/address.entity';
import { IdDocument } from './entity/idDocument.entity';

@Module({
  imports: [
    ConfigModule,
    HttpModule,
    TypeOrmModule.forFeature([Client, IdDocument, Address]),
  ],
  controllers: [ClientsController],
  providers: [ClientMysqlService, ClientMysqlService, MambuService, AppUtils],
})
export class ClientsModule {}

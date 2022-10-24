import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Address } from './address.entity';
import { IdDocument } from './idDocument.entity';

@Entity({ name: 'client' })
export class Client {
  @PrimaryColumn()
  encodedKey: string;
  @Column()
  externalId: string;
  @Column()
  id: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  middleName: string;
  @Column()
  homePhone: string;
  @Column()
  mobilePhone: string;
  @Column()
  emailAddress: string;
  @Column()
  birthDate: string;
  @Column()
  gender: string;
  @Column()
  notes: string;

  @OneToMany(() => IdDocument, (IdDocument) => IdDocument.clientKey)
  idDocuments: IdDocument[];

  @OneToMany(() => Address, (address) => address.clientKey)
  addresses: Address[];
}

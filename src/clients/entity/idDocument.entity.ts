import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Client } from './client.entity';

@Entity({ name: 'iddocument' })
export class IdDocument {
  @PrimaryColumn()
  encodedKey: string;
  @Column()
  documentType: string;
  @Column()
  documentId: string;
  @Column()
  issuingAuthority: string;
  @Column()
  validUntil: string;

  @ManyToOne(() => Client, (client) => client.idDocuments)
  clientKey: Client;
}

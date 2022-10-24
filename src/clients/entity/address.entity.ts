import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Client } from './client.entity';

@Entity({ name: 'address' })
export class Address {
  @PrimaryColumn()
  encodedKey: string;
  @Column()
  line1: string;
  @Column()
  line2: string;
  @Column()
  city: string;
  @Column()
  country: string;
  @Column()
  postcode: string;
  @Column()
  region: string;

  @ManyToOne(() => Client, (client) => client.addresses)
  clientKey: Client;
}

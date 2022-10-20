import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'client' })
export class Client {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  encodedKey: string;
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
  emailaddress: string;
  @Column()
  birtDate: string;
  @Column()
  gender: string;
  @Column()
  notes: string;

  @OneToMany(() => Address, (address) => address.owner)
  address: Address[];
}

@Entity({ name: 'address' })
export class Address {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  encodedKey: string;
  @Column()
  linea1: string;
  @Column()
  linea2: string;
  @Column()
  city: string;
  @Column()
  country: string;
  @Column()
  postCode: string;
  @Column()
  region: string;

  @ManyToOne(() => Client, (client) => client.address)
  owner: Client;
}

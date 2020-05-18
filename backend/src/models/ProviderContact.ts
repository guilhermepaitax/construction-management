import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import Provider from './Provider';

@Entity('providers_contacts')
class ProviderContact {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  telefone_01: string;

  @Column()
  telefone_02: string;

  @Column()
  email: string;

  @Column()
  nome_contato: string;

  @Column()
  endereco: string;

  @Column()
  provider_id: string;

  @ManyToOne(() => Provider, provider => provider.providerContact, {
    eager: true,
  })
  @JoinColumn({ name: 'provider_id' })
  provider: Provider;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ProviderContact;

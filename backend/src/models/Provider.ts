import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import ProviderContact from './ProviderContact';
import ProviderBilling from './ProviderBilling';
import ProviderObservation from './ProviderObservation';

@Entity('providers')
class Provider {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  razao_social: string;

  @Column()
  nome_fantasia: string;

  @Column()
  cnpj: string;

  @Column()
  inscricao_estadual: string;

  @OneToMany(() => ProviderContact, providerContact => providerContact.provider)
  providerContact: ProviderContact;

  @OneToMany(() => ProviderBilling, providerBilling => providerBilling.provider)
  providerBilling: ProviderBilling;

  @OneToMany(
    () => ProviderObservation,
    providerObservation => providerObservation.provider,
  )
  providerObservation: ProviderObservation;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Provider;

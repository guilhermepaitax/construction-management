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

@Entity('providers_observations')
class ProviderObservation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  observacao: string;

  @Column()
  provider_id: string;

  @ManyToOne(() => Provider, provider => provider.providerObservation, {
    eager: true,
  })
  @JoinColumn({ name: 'provider_id' })
  provider: Provider;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ProviderObservation;

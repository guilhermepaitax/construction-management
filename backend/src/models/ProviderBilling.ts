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

@Entity('providers_billings')
class ProviderBilling {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  metodo: string;

  @Column()
  prazo: string;

  @Column()
  banco: string;

  @Column()
  agencia: string;

  @Column()
  conta: string;

  @Column()
  operacao: string;

  @Column()
  titularidade: string;

  @Column()
  provider_id: string;

  @ManyToOne(() => Provider, provider => provider.providerBilling, {
    eager: true,
  })
  @JoinColumn({ name: 'provider_id' })
  provider: Provider;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ProviderBilling;

import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateProvidersBillings1589824750474
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'providers_billings',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'metodo',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'prazo',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'banco',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'agencia',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'conta',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'operacao',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'titularidade',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'provider_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'providers_billings',
      new TableForeignKey({
        name: 'ProviderBilling',
        columnNames: ['provider_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'providers',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('providers_billings', 'ProviderBilling');

    await queryRunner.dropTable('providers_billings');
  }
}

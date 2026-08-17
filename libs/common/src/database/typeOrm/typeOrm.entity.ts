import { PrimaryGeneratedColumn } from 'typeorm';

export class TypeOrmEntity<T> {
  @PrimaryGeneratedColumn()
  id: number;

  constructor(entity: Partial<T>) {
    Object.assign(this, entity);
  }
}

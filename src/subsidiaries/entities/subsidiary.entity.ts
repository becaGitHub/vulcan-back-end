import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity('subsidiaries')
export class Subsidiary {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 36 })
  name: string;

  @Column({ type: 'varchar', length: 36 })
  city: string;

  @Column({ default: true })
  active: boolean;

  @Column({ default: false })
  deleted: boolean;

  @Column({ type: 'varchar', length: 36 })
  created_by: string;

  @Column({ type: 'varchar', length: 36 })
  modified_by: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date_entered?: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  date_modified?: Date;

  @Column({ type: 'varchar', length: 36 })
  tenant_id: string;

  @OneToMany(() => User, user => user.subsidiary)
  users: User[];
}
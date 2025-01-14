import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('curses')
export class Curse {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  maximum!: number;

  @Column({ default: false })
  deleted!: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date_entered!: Date;

  @Column({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
  date_modified!: Date;
}

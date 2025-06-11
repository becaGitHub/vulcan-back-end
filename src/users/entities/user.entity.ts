import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
    // @PrimaryColumn({ type: 'varchar', length: 36 })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 36 })
    name: string;

    @Column({ type: 'varchar', length: 36 })
    dni: string;

    @Column({ type: 'varchar', length: 36 })
    username: string;

    @Column({ unique: true ,type: 'varchar', length: 36 })
    email: string;

    @Column({ type: 'varchar', length: 60 })
    password: string;

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

    @Column({ default:'user', type: 'varchar', length: 36 })
    role: string;

}

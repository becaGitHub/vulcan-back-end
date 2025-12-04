import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('tenants')
export class Tenant {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 36 })
    name: string;

    @Column({ type: 'varchar', length: 36, nullable: true })
    address?: string;

    @Column({ type: 'varchar', length: 20, nullable: true })
    phone?: string;
    
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
}

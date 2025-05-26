import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';

@Entity('sales')
export class Sale {
    @PrimaryColumn({ type: 'varchar', length: 36 })
    id: string;
    
    @Column({ type: 'varchar', length: 36 })
    client_name: string;

    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2,
        transformer: {
        to: (value: number) => value,
        from: (value: string) => parseFloat(value),
        },
    })
    receipt: number;

    @Column({ default: false })
    annulled: boolean;

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
    user_id: string;

    @Column({ type: 'varchar', length: 36 })
    product_id: string;

    @Column({ type: 'varchar', length: 36 })
    product_name: string;

    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2,
        transformer: {
        to: (value: number) => value,
        from: (value: string) => parseFloat(value),
        },
    })
    product_price: number;

    @Column({ default: false })
    takeaway: boolean;

    @Column({ type: 'varchar', length: 36 })
    tenant_id: string;
}

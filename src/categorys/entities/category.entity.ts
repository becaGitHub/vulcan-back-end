import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { SubCategory } from '../../sub-category/entities/sub-category.entity';
import { Product } from 'src/products/entities/product.entity';

@Entity('categorys')
export class Category {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  id: string;

  @Column({ type: 'varchar', length: 36 })
  name: string;

  @Column({ type: 'varchar', length: 36 })
  icon: string;

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

  @OneToMany(() => SubCategory, SubCategory => SubCategory.category)
  sub_categories: SubCategory[];

  @OneToMany(() => Product, product => product.category)
  products: Product[];

  @Column({ type: 'varchar', length: 36 })
  tenant_id: string;
}

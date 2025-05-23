import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Category } from '../../categorys/entities/category.entity';
import { Product } from 'src/products/entities/product.entity';

@Entity('sub_category')
export class SubCategory {
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

  @Column({ type: 'varchar', length: 36 })
  category_id: string;

  @ManyToOne(() => Category, category => category.sub_categories)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @OneToMany(() => Product, product => product.sub_category)
  products: Product[];
}
import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Category } from '../../categorys/entities/category.entity';
import { SubCategory } from '../../sub-category/entities/sub-category.entity';

@Entity('products')
export class Product {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  id: string;

  @Column({ type: 'varchar', length: 36 })
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'varchar', length: 36 })
  image: string;

  @Column({ type: 'varchar', length: 36 })
  category_id: string;

  @Column({ type: 'varchar', length: 36, nullable: true })
  sub_category_id?: string;

  @Column({ default: true })
  active: boolean;

  @Column({ default: false })
  deleted: boolean;

  @Column({ type: 'varchar', length: 36 })
  created_by: string;

  @Column({ type: 'varchar', length: 36 })
  modified_by: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date_entered: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  date_modified: Date;

  @ManyToOne(() => SubCategory, sub_categories => sub_categories.products, { nullable: true })
  @JoinColumn({ name: 'sub_category_id' })
  sub_category?: SubCategory;

  @ManyToOne(() => Category, category => category.products)
  @JoinColumn({ name: 'category_id' })
  category: Category;
}
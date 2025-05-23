import { IsEmpty, IsOptional, IsUUID } from 'class-validator';

export class CreateProductDto {  
  @IsOptional()
  @IsUUID()
  id?: string;

  @IsEmpty()
  name: string;

  @IsEmpty()
  price: number;

  @IsEmpty()
  image: string;

  @IsUUID()
  category_id: string;

  @IsOptional()
  @IsUUID()
  sub_category_id?: string;

  @IsOptional()
  active?: boolean;

  @IsOptional()
  deleted?: boolean;

  @IsEmpty()
  created_by: string;

  @IsEmpty()
  modified_by: string;
  
  @IsOptional()
  date_entered?: Date;

  @IsOptional()
  date_modified?: Date;
}
export class CreateCategoryDto {
  id?: string;
  name: string;
  icon: string;
  deleted?: boolean;
  created_by: string;
  modified_by: string;
  date_entered?: Date;
  date_modified?: Date;
}
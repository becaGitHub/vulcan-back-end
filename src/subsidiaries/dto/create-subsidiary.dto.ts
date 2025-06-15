export class CreateSubsidiaryDto {
  id?: string;
  name: string;
  city: string;
  active?: boolean;
  deleted?: boolean;
  created_by: string;
  modified_by: string;
  date_entered?: Date;
  date_modified?: Date;
  tenant_id: string;
}
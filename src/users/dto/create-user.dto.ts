export class CreateUserDto {
    name: string;
    email: string;
    password: string;
    dni: string;
    username: string;
    image?: string;
    phone?: string;
    address?: string;
    gender?: string;
    role?: string;
    tenant_id?: string;
    subsidiary_id?: string;
    created_by?: string;
    modified_by?: string;
    date_entered?: Date;
    date_modified?: Date;
    birthday?: Date;
    deleted?: boolean;
    active?: boolean;
}

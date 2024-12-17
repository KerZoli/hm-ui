export enum UserRoles {
  SuperAdmin = 'super admin',
  Owner = 'owner',
  Manager = 'manager',
  Client = 'client'
}

export interface IRole {
  id: number;
  name: UserRoles;
}

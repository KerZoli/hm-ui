import type { IRole } from './IRole';

export interface IUser {
  email: string;
  username: string;
  roles: IRole[];
  is_verified: boolean;
}

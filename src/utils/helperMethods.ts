import type { IRole, UserRoles } from '@/types/IRole';

export const toFormData = (reactiveObject: Record<string, any>): FormData => {
  const formData = new FormData();

  for (const key in reactiveObject) {
    if (reactiveObject[key]) {
      formData.append(key, reactiveObject[key]);
    }
  }

  return formData;
};

const hasRole = (role: UserRoles, userRoles: IRole[]) => userRoles.some((r) => r.name === role);

export const hasAnyRole = (roles: UserRoles[], userRoles: IRole[]) =>
  roles.some((role) => hasRole(role, userRoles));

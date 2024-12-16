export interface IRegisterForm {
  username: string;
  password: string;
  password_confirmation: string;
  email: string;
  address?: string;
  birth_date?: string;
  phone?: string;
  bio?: string;
  avatar?: File | null;
}

export interface IRegisterForm {
  username: string;
  password: string;
  password_confirmation: string;
  email: string;
  address?: string;
  date_of_birth?: string;
  phone?: string;
  bio?: string;
  profile_picture?: File | null;
}

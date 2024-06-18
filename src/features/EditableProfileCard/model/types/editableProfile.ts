import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '@/entities/Profile/model/types/profile';

export interface EditableProfileSchema {
  data?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  form?: Profile;
  validateErrors?: ValidateProfileError[];
}

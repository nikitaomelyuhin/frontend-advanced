import { StateSchema } from '@/shared/providers/StoreProvider';
import { ValidateProfileError } from '@/entities/Profile';
import { getEditableProfileValidateErrors } from './getEditableProfileValidateErrors';

describe('getEditableProfileValidateErrors', () => {
  test('should return errors', () => {
    const state: DeepPartial<StateSchema> = {
      editableProfile: {
        validateErrors: [ValidateProfileError.INCORRECT_AGE],
      },
    };
    expect(getEditableProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getEditableProfileValidateErrors(state as StateSchema)).toBe(undefined);
  });
});

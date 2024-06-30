import { Currency } from '@/entities/Currency';
import { EditableProfileSchema } from '../types/editableProfile';
import { editableProfileActions, editableProfileReducer } from './editableProfileSlice';
import { Country } from '@/entities/Country';
import { updateProfile, ValidateProfileError } from '@/entities/Profile';

const data = {
  first: 'Nikita',
  lastname: 'Omelyukhin',
  age: 30,
  city: 'Moscow',
  avatar: 'https://kartinki.pics/uploads/posts/2022-02/1645857326_1-kartinkin-net-p-dzherri-kartinki-1.jpg',
  currency: Currency.RUB,
  country: Country.Russia,
};
describe('editableProfileSlice', () => {
  test('test set readonly', () => {
    const state: DeepPartial<EditableProfileSchema> = {};
    expect(editableProfileReducer(
      state as EditableProfileSchema,
      editableProfileActions.changeReadonly(false),
    )).toEqual({ readonly: false });
  });
  test('test cancel edit', () => {
    const state: DeepPartial<EditableProfileSchema> = {
      readonly: false,
      data,
      form: {
        ...data, first: 'Bob', age: 34, country: Country.Kazakhstan,
      },
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(editableProfileReducer(
      state as EditableProfileSchema,
      editableProfileActions.cancelEdit(),
    )).toEqual({
      data,
      readonly: true,
      form: data,
      validateErrors: undefined,
    });
  });
  test('test update form', () => {
    const state: DeepPartial<EditableProfileSchema> = {
      form: data,
    };
    expect(editableProfileReducer(
      state as EditableProfileSchema,
      editableProfileActions.updateForm({
        ...data, lastname: 'foo', currency: Currency.EUR, city: 'Berlin',
      }),
    )).toEqual({
      form: {
        ...data, lastname: 'foo', currency: Currency.EUR, city: 'Berlin',
      },
    });
  });
  test('test fulfilled', () => {
    const state: DeepPartial<EditableProfileSchema> = { isLoading: true };

    expect(editableProfileReducer(
      state as EditableProfileSchema,
      updateProfile.fulfilled(data, '', data),
    )).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      validateError: undefined,
      form: data,
      data,
    });
  });
});

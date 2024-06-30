import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/profile';

const data = {
  first: 'Nikita',
  lastname: 'Omelyukhin',
  age: 30,
  city: 'Moscow',
  avatar: 'https://kartinki.pics/uploads/posts/2022-02/1645857326_1-kartinkin-net-p-dzherri-kartinki-1.jpg',
  currency: Currency.RUB,
  country: Country.Russia,
};

describe('validateProfileData', () => {
  test('should return empty errors', () => {
    const errors = validateProfileData(data);

    expect(errors).toEqual([]);
  });
  test('without first and last name', () => {
    const errors = validateProfileData({ ...data, first: '', lastname: '' });

    expect(errors).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });
  test('without age', () => {
    const errors = validateProfileData({ ...data, age: undefined });

    expect(errors).toEqual([
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });
  test('without country', () => {
    const errors = validateProfileData({ ...data, country: undefined });

    expect(errors).toEqual([
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
  test('without all', () => {
    const errors = validateProfileData({});

    expect(errors).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});

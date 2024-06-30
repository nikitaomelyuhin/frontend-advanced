import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StateSchema } from '@/shared/providers/StoreProvider';
import { getEditableProfileForm } from './getEditableProfileForm';

describe('getEditableProfileForm', () => {
  test('should return filled state', () => {
    const data = {
      first: 'Nikita',
      lastname: 'Omelyukhin',
      age: 30,
      city: 'Moscow',
      avatar: 'https://kartinki.pics/uploads/posts/2022-02/1645857326_1-kartinkin-net-p-dzherri-kartinki-1.jpg',
      currency: Currency.RUB,
      country: Country.Russia,
    };
    const state: DeepPartial<StateSchema> = {
      editableProfile: {
        form: data,
      },
    };
    expect(getEditableProfileForm(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getEditableProfileForm(state as StateSchema)).toEqual(undefined);
  });
});

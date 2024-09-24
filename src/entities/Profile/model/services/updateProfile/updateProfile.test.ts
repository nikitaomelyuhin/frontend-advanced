import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { updateProfile } from './updateProfile';
import { ValidateProfileError } from '../../types/profile';

const data = {
  first: 'Nikita',
  lastname: 'Omelyukhin',
  age: 30,
  city: 'Moscow',
  avatar: 'https://kartinki.pics/uploads/posts/2022-02/1645857326_1-kartinkin-net-p-dzherri-kartinki-1.jpg',
  currency: Currency.RUB,
  country: Country.Russia,
  id: '1',
};
describe('updateProfile', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfile);
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk(data);

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });
  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfile);
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk(data);

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.SERVER_ERROR,
    ]);
  });
  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfile);
    const result = await thunk.callThunk({ ...data, first: '', lastname: '' });

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });
});

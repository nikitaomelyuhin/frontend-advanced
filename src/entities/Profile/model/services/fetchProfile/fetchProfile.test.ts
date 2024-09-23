import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProfile } from './fetchProfile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';

const data = {
  id: '1',
  first: 'Nikita',
  lastname: 'Omelyukhin',
  age: 30,
  city: 'Moscow',
  avatar: 'https://kartinki.pics/uploads/posts/2022-02/1645857326_1-kartinkin-net-p-dzherri-kartinki-1.jpg',
  currency: Currency.RUB,
  country: Country.Russia,
};
describe('fetchProfile', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfile);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });
  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfile);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(result.meta.requestStatus).toBe('rejected');
  });
});

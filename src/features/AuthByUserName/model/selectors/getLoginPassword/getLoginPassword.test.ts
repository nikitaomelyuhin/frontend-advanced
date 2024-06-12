import { StateSchema } from '@/shared/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        password: '1234',
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('1234');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});

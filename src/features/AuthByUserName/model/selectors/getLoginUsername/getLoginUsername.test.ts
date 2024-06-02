import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/shared/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: '1234',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('1234');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});

import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/shared/providers/StoreProvider';
import { getLoginLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        isLoading: true,
      },
    };
    expect(getLoginLoading(state as StateSchema)).toEqual(true);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginLoading(state as StateSchema)).toEqual(false);
  });
});

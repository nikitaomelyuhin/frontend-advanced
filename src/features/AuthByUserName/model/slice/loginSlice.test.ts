import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = {
      username: '123',
    };
    expect(loginReducer(state as LoginSchema, loginActions.setUsername('214'))).toEqual({ username: '214' });
  });
  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '123',
    };
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('214'))).toEqual({ password: '214' });
  });
});

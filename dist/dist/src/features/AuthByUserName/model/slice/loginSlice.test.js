import { loginActions, loginReducer } from './loginSlice';
describe('loginSlice', function () {
    test('test set username', function () {
        var state = {
            username: '123',
        };
        expect(loginReducer(state, loginActions.setUsername('214'))).toEqual({ username: '214' });
    });
    test('test set password', function () {
        var state = {
            password: '123',
        };
        expect(loginReducer(state, loginActions.setPassword('214'))).toEqual({ password: '214' });
    });
});

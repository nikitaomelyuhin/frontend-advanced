import { getLoginError } from './getLoginError';
describe('getLoginError', function () {
    test('should return error', function () {
        var state = {
            login: {
                error: 'error',
            },
        };
        expect(getLoginError(state)).toEqual('error');
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getLoginError(state)).toEqual('');
    });
});

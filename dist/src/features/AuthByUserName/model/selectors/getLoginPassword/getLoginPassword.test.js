import { getLoginPassword } from './getLoginPassword';
describe('getLoginPassword', function () {
    test('should return value', function () {
        var state = {
            login: {
                password: '1234',
            },
        };
        expect(getLoginPassword(state)).toEqual('1234');
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getLoginPassword(state)).toEqual('');
    });
});

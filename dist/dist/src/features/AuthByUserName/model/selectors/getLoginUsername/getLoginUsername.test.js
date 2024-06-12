import { getLoginUsername } from './getLoginUsername';
describe('getLoginUsername', function () {
    test('should return value', function () {
        var state = {
            login: {
                username: '1234',
            },
        };
        expect(getLoginUsername(state)).toEqual('1234');
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getLoginUsername(state)).toEqual('');
    });
});

import { getLoginLoading } from './getLoginIsLoading';
describe('getLoginIsLoading', function () {
    test('should return true', function () {
        var state = {
            login: {
                isLoading: true,
            },
        };
        expect(getLoginLoading(state)).toEqual(true);
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getLoginLoading(state)).toEqual(false);
    });
});

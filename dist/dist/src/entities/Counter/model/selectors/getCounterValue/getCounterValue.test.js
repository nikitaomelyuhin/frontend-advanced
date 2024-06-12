import { getCounterValue } from './getCounterValue';
describe('getCounter', function () {
    test('should return the correct value', function () {
        var state = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state)).toEqual(10);
    });
});

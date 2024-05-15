import { DeepPartial } from '@reduxjs/toolkit';
import { getCounterValue } from './getCounterValue';
import { StateSchema } from '@/shared/providers/StoreProvider';

describe('getCounter', () => {
    test('should return the correct value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});

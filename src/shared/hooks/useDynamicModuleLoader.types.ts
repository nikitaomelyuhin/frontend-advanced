import { Reducer } from '@reduxjs/toolkit';
import { StateSchemaKeys } from '../providers/StoreProvider/config/StateSchema';

export type ReducersList = {
  [name in StateSchemaKeys]?: Reducer;
};

export type ReducersListEntry = [StateSchemaKeys, Reducer];

export interface DynamicModuleLoaderParams {
  reducers: ReducersList,
  removeAfterUnmount?: boolean;
}

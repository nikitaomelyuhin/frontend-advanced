import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from '@/shared/providers/StoreProvider/config/StateSchema';
import { DynamicModuleLoaderParams, ReducersListEntry } from '../useDynamicModuleLoader.types';
import { useAppDispatch } from '../useAppDispatch/useAppDispatch';

export const useDynamicModuleLoader = (params: DynamicModuleLoaderParams) => {
  const {
    reducers,
    removeAfterUnmount,
  } = params;

  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);
};

import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
export var useDynamicModuleLoader = function (params) {
    var reducers = params.reducers, removeAfterUnmount = params.removeAfterUnmount;
    var store = useStore();
    var dispatch = useDispatch();
    useEffect(function () {
        Object.entries(reducers).forEach(function (_a) {
            var name = _a[0], reducer = _a[1];
            store.reducerManager.add(name, reducer);
            dispatch({ type: "@INIT ".concat(name, " reducer") });
        });
        return function () {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(function (_a) {
                    var name = _a[0], reducer = _a[1];
                    store.reducerManager.remove(name);
                    dispatch({ type: "@DESTROY ".concat(name, " reducer") });
                });
            }
        };
        // eslint-disable-next-line
    }, []);
};

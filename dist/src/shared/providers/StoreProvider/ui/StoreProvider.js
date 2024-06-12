import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createReduxStore } from '../config/store';
export var StoreProvider = function (props) {
    var children = props.children, initialState = props.initialState, asyncReducers = props.asyncReducers;
    var navigate = useNavigate();
    var store = createReduxStore(initialState, asyncReducers, navigate);
    return (_jsx(Provider, { store: store, children: children }));
};

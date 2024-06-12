import { jsx as _jsx } from "react/jsx-runtime";
import { StoreProvider } from '@/shared/providers/StoreProvider';
export var StoreDecorator = function (state) {
    return function (StoryComponent) {
        return (_jsx(StoreProvider, { initialState: state, children: _jsx(StoryComponent, {}) }));
    };
};

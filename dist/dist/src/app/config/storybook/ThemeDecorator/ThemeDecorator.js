import { jsx as _jsx } from "react/jsx-runtime";
export var ThemeDecorator = function (theme) {
    return function (StoryComponent) {
        document.body.className = "app ".concat(theme);
        return (_jsx("div", { id: "app", className: "app ".concat(theme), children: _jsx(StoryComponent, {}) }));
    };
};

import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Counter.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { ButtonThemes } from '@/shared/ui/Button/Button.types';
import { getCounterValue } from '@/entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '@/entities/Counter/model/slice/counterSlice';
export var Counter = function (props) {
    var className = props.className;
    var counterValue = useSelector(getCounterValue);
    var dispatch = useDispatch();
    var increase = function () {
        dispatch(counterActions.increment());
    };
    var decrease = function () {
        dispatch(counterActions.decrement());
    };
    return (_jsxs("div", { className: classNames(cls.Counter, {}, [className]), children: [_jsxs("h2", { "data-testid": "counter-title", children: ["Count:", counterValue] }), _jsx(Button, { "data-testid": "counter-increment", theme: ButtonThemes.OUTLINE, onClick: increase, children: "increase" }), _jsx(Button, { "data-testid": "counter-decrement", theme: ButtonThemes.OUTLINE, onClick: decrease, children: "decrease" })] }));
};

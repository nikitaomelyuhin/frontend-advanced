import { lazy } from 'react';
export var LoginFormAsync = lazy(function () {
    return new Promise(function (res) {
        setTimeout(function () {
            // @ts-ignore
            res(import('./LoginForm'));
        }, 500);
    });
});

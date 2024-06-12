import { lazy } from 'react';
export var MainPageAsync = lazy(function () {
    return new Promise(function (res) {
        setTimeout(function () {
            // @ts-ignore
            res(import('./MainPage'));
        }, 500);
    });
});

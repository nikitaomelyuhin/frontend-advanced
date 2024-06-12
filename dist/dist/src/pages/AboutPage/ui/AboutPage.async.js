import { lazy } from 'react';
export var AboutPageAsync = lazy(function () {
    return new Promise(function (res) {
        setTimeout(function () {
            // @ts-ignore
            res(import('./AboutPage'));
        }, 500);
    });
});

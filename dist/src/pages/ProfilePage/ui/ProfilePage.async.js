import { lazy } from 'react';
export var ProfilePageAsync = lazy(function () { return new Promise(function (res) {
    setTimeout(function () {
        // @ts-ignore
        res(import('./ProfilePage'));
    }, 500);
}); });

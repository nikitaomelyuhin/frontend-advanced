var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { DefinePlugin } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
export default (function (_a) {
    var config = _a.config;
    var paths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias = __assign(__assign({}, config.resolve.alias), { '@': path.resolve(__dirname, '..', '..', 'src') });
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map(function (rule) {
        if (/svg/.test(rule.test)) {
            return __assign(__assign({}, rule), { exclude: /\.svg$/i });
        }
        return rule;
    });
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module.rules.push(buildCssLoader(true));
    config.plugins.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(''),
    }));
    return config;
});

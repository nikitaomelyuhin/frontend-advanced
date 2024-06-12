import { buildCssLoader } from './loaders/buildCssLoader';
export function buildLoaders(options) {
    var isDev = options.isDev;
    var svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    };
    var babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };
    var fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff|webp)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
    var styleLoader = buildCssLoader(isDev);
    var typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        styleLoader,
    ];
}

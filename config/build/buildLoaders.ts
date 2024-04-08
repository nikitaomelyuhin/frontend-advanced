import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;
    const styleLoader = {
            test: /\.s[ac]ss$/i,
            use: [
                options.isDev ? MiniCssExtractPlugin.loader: 'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                            localIdentName: isDev ?
                                "[path][name]__[local]--[hash:base64:8]":
                                "[hash:base64:8]",
                        }
                    }
                },
                "sass-loader",
            ],
        };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typescriptLoader,
        styleLoader
    ]
}
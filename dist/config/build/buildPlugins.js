import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
export function buildPlugins(_a) {
    var paths = _a.paths, isDev = _a.isDev, apiUrl = _a.apiUrl;
    var plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
        }),
    ];
    // plugins.push(new BundleAnalyzerPlugin({
    //   openAnalyzer: false,
    // }));
    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }
    return plugins;
}

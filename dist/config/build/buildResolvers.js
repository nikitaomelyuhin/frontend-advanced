export function buildResolvers(options) {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': options.paths.src,
        },
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        preferAbsolute: true,
    };
}

import path from 'path';
var config = {
    globals: {
        __IS_DEV__: true,
        __API__: '',
    },
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    clearMocks: true,
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    moduleDirectories: ['node_modules'],
    testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
    transform: {
        '^.+\\.tsx?$': ['ts-jest', {
                tsconfig: '<rootDir>tsconfig.json',
            }],
    },
    moduleNameMapper: {
        '^.+\\.(svg)$': path.resolve(__dirname, 'JestEmptyComponent.tsx'),
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.(s?css)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>config/jest/jest.setup.ts'],
    rootDir: '../../',
};
export default config;

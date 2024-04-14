import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    clearMocks: true,
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    moduleDirectories: ['node_modules'],
    testMatch: ['<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)'],
    rootDir: '../../',
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.json',
        },
    },
};

export default config;

module.exports = {
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/tests'],
    testMatch: ['**/*.test.js'],
    collectCoverageFrom: [
        'src/core/**/*.js',
        'src/state/**/*.js',
        'src/storage/**/*.js',
        'src/history/**/*.js',
        'src/utils/**/*.js',
        '!src/ui/**/*.js'  // UI는 수동 테스트만
    ],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 90,
            lines: 90,
            statements: 90
        }
    },
    transform: {},
    setupFilesAfterEnv: ['<rootDir>/tests/setup.js']
};

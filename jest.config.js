module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src/tests'],
    testPathIgnorePatterns: ['/node_modules/','/dist/'],
    testMatch: ['**/*.test.ts'],
}
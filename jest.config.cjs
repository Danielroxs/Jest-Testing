module.exports = {
    transform: {
        '^.+\\.[tj]sx?$': 'babel-jest',  // Esto permite que Jest transforme archivos JS y JSX con Babel
    },
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
};

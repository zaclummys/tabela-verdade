import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'node',
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, './src')
        },
    },
});

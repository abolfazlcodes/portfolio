import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./setup.ts'],
    globals: true,
    reporters: ['verbose'],
    coverage: {
      include: ['src/**/*'],
      reporter: ['text', 'json', 'html'],
      // perFile: true,
      all: true,
      lines: 65,
      branches: 70,
      functions: 60,
      statements: 65,
    },
  },
});

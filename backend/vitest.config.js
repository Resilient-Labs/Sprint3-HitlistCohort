import { defineConfig } from 'vitest';

export default defineConfig({
  test: {
    globals: true, // Enables global test functions like 'describe' and 'it'
  }
});
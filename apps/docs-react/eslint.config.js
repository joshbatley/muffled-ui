import { defineConfig, globalIgnores } from 'eslint/config'
import internalLib from "@repo/eslint-config/react.js";

export default defineConfig([
  globalIgnores(['dist', 'storybook-static']),
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      "@typescript-eslint/no-explicit-any": 0
    },
    extends: [
      internalLib
    ],
  },
])

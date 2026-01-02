import { defineConfig, globalIgnores } from 'eslint/config'
import internalLib from "@repo/eslint-config/react.js";

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      internalLib
    ],
  },
])

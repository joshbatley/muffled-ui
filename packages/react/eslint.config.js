import { defineConfig, globalIgnores } from 'eslint/config'
import internalLib from "@repo/eslint-config/lib.js";

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      internalLib
    ],
  },
])

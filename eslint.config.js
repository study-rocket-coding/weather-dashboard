import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import tseslint from 'typescript-eslint' // 引入這行

export default defineConfig([
  globalIgnores(['dist']),
  {
    // 檔案類型加入 ts, tsx
    files: ['**/*.{js,jsx,ts,tsx}'], 
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended, // 展開 TS 推薦規則
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tseslint.parser,  // 指定 parser 為 tseslint.parser，它其實也看得懂 JS
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // 如果是 JS 檔案，TS 的規則通常會自動跳過或是只做基本檢查
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]', argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]', argsIgnorePattern: '^_' }],
    },
  },
  // 額外加上這一段：專門給 JS 檔案的「放行」設定
  {
    files: ['**/*.{js,jsx}'],
    extends: [tseslint.configs.disableTypeChecked],
    rules: {
      // 在 JS 檔案中，關閉 TS 專有的檢查，避免誤判
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
])
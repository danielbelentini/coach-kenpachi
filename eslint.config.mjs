import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

/**
 * A partir do Next.js 16, o comando "next lint" foi removido — o ESLint
 * é executado diretamente via CLI (`npm run lint` → `eslint .`), usando o
 * formato "flat config" (padrão a partir do ESLint 9/10).
 */
const eslintConfig = defineConfig([
  ...nextCoreWebVitals,
  ...nextTypescript,
  globalIgnores([".next/**", "out/**", "build/**", "node_modules/**", "next-env.d.ts"]),
]);

export default eslintConfig;

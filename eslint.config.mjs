import antfu from "@antfu/eslint-config";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default antfu(
  {
    type: "app",
    typescript: true,
    formatters: true,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
    ignores: [".pnpm-store/*", "node_modules"],
  },
  {
    rules: {
      "ts/no-redeclare": "off",
      "ts/consistent-type-definitions": ["error", "type"],
      "no-console": ["warn"],
      "antfu/no-top-level-await": ["off"],
      "node/prefer-global/process": ["off"],
      "perfectionist/sort-imports": [
        "error",
        {
          tsconfigRootDir: ".",
        },
      ],
      "unicorn/filename-case": [
        "error",
        {
          case: "kebabCase",
          ignore: ["README.md"],
        },
      ],
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
    },
  },
  eslintPluginPrettierRecommended, // <-- ensures Prettier runs with ESLint
);

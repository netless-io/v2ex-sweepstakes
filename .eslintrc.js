module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@netless/recommended",
        "plugin:prettier/recommended",
    ],
    plugins: ["@netless", "prettier", "@typescript-eslint"],
    parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
    },
    env: {
        node: true,
    },
    rules: {
        // http://eslint.org/docs/rules/
        "array-callback-return": "warn",
        "default-case": ["warn", { commentPattern: "^no default$" }],
        "dot-location": ["warn", "property"],
        eqeqeq: ["error", "always"],
        "new-parens": "warn",
        "no-array-constructor": "warn",
        "no-caller": "warn",
        "no-cond-assign": ["warn", "except-parens"],
        "no-const-assign": "warn",
        "no-control-regex": "warn",
        "no-delete-var": "warn",
        "no-dupe-args": "warn",
        // support typescript overload
        // typescript does its own check
        "no-dupe-class-members": "off",
        "no-dupe-keys": "warn",
        "no-duplicate-case": "warn",
        "no-empty-character-class": "warn",
        "no-empty-pattern": "warn",
        "no-eval": "warn",
        "no-ex-assign": "warn",
        "no-extend-native": "warn",
        "no-extra-bind": "warn",
        "no-extra-label": "warn",
        "no-fallthrough": "warn",
        "no-func-assign": "warn",
        "no-implied-eval": "warn",
        "no-invalid-regexp": "warn",
        "no-iterator": "warn",
        "no-label-var": "warn",
        "no-labels": ["warn", { allowLoop: true, allowSwitch: false }],
        "no-lone-blocks": "warn",
        "no-loop-func": "warn",
        "no-mixed-operators": [
            "warn",
            {
                groups: [
                    ["&", "|", "^", "~", "<<", ">>", ">>>"],
                    ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                    ["&&", "||"],
                    ["in", "instanceof"],
                ],
                allowSamePrecedence: false,
            },
        ],
        "no-multi-str": "warn",
        "no-native-reassign": "warn",
        "no-negated-in-lhs": "warn",
        "no-new-func": "warn",
        "no-new-object": "warn",
        "no-new-symbol": "warn",
        "no-new-wrappers": "warn",
        "no-obj-calls": "warn",
        "no-octal": "warn",
        "no-octal-escape": "warn",
        // TODO: Remove this option in the next major release of CRA.
        // https://eslint.org/docs/user-guide/migrating-to-6.0.0#-the-no-redeclare-rule-is-now-more-strict-by-default
        "no-redeclare": ["warn", { builtinGlobals: false }],
        "no-regex-spaces": "warn",
        "no-restricted-syntax": ["warn", "WithStatement"],
        "no-script-url": "warn",
        "no-self-assign": "warn",
        "no-self-compare": "warn",
        "no-sequences": "warn",
        "no-shadow-restricted-names": "warn",
        "no-sparse-arrays": "warn",
        "no-template-curly-in-string": "warn",
        "no-this-before-super": "warn",
        "no-throw-literal": "warn",
        "no-undef": "error",
        "no-unreachable": "warn",
        "no-unused-expressions": [
            "error",
            {
                allowShortCircuit: true,
                allowTernary: true,
                allowTaggedTemplates: true,
            },
        ],
        "no-unused-labels": "warn",
        "no-unused-vars": "off",
        "no-useless-computed-key": "warn",
        "no-useless-concat": "warn",
        "no-useless-constructor": "warn",
        "no-useless-escape": "warn",
        "no-useless-rename": [
            "warn",
            {
                ignoreDestructuring: false,
                ignoreImport: false,
                ignoreExport: false,
            },
        ],
        "no-with": "warn",
        "no-whitespace-before-property": "warn",
        "require-yield": "warn",
        "rest-spread-spacing": ["warn", "never"],
        strict: ["warn", "never"],
        "unicode-bom": ["warn", "never"],
        "use-isnan": "warn",
        "valid-typeof": "warn",
        "getter-return": "warn",

        // custom
        "@typescript-eslint/no-redeclare": "off",
        "no-use-before-define": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/array-type": [
            "error",
            {
                default: "array-simple",
                readonly: "array-simple",
            },
        ],
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                accessibility: "explicit",
                overrides: {
                    accessors: "explicit",
                    constructors: "explicit",
                },
            },
        ],
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                multiline: {
                    delimiter: "semi",
                    requireLast: true,
                },
                singleline: {
                    delimiter: "semi",
                    requireLast: false,
                },
            },
        ],
        "@typescript-eslint/no-unused-expressions": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/quotes": ["error", "double"],
        "@typescript-eslint/semi": ["error", "always"],
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "prettier/prettier": "error",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-var-requires": "off",
    },

    overrides: [
        {
            // enable the rule specifically for TypeScript files
            files: ["*.ts"],
            rules: {
                "@typescript-eslint/explicit-function-return-type": [
                    "error",
                    {
                        allowExpressions: true,
                        allowTypedFunctionExpressions: true,
                        allowHigherOrderFunctions: true,
                        allowDirectConstAssertionInArrowFunctions: true,
                        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
                    },
                ],
            },
        },
    ],
};

// cjs这个后缀的原因是pkg.type:modules会报错。

module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "ignorePatterns": ["**/dist/**", "**/*.css"],
    "parser": "vue-eslint-parser",

    "parserOptions": {
        "parser": "@typescript-eslint/parser",
        "requireConfigFile": false,
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "globalReturn": true,
        },
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        // 可以解决types为{}时候的报错：
        // "@typescript-eslint/ban-types": [
        //     "error",
        //     {
        //         "extendDefaults": true,
        //         "types": {
        //             "{}": false
        //         }
        //     }
        // ]
        // 可以降低检测等级
        // 'vue/no-reserved-component-names': 1,
        // 'vue/require-v-for-key': 1,
        // 'vue/multi-word-component-names': 1,

        // '@typescript-eslint/array-type': 2,
        'vue/multi-word-component-names': [1],
        'no-console': [1], // 对于 console 进行警告
        'no-unused-vars': ['warn'], // 对于未使用的变量进行警告
    }
}

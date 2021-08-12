const paths = require("./paths");
const webpack = require("webpack");
const ESLintPlugin = require("eslint-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
    entry: paths.index,
    target: "node",

    devtool: "source-map",

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },

    externals: [nodeExternals()],

    plugins: [
        new webpack.ProgressPlugin(),
        new ESLintPlugin({
            fix: true,
            extensions: ["ts"],
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                configFile: paths.tsConfig,
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true,
                    declaration: true,
                },
            },
        }),
    ],

    resolve: {
        extensions: [".ts", ".js"],
    },

    output: {
        filename: "index.js",
        path: paths.dist,
    },
};

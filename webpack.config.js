const path = require("path");

module.exports = {
    entry: "./src/index.ts",

    output: {
        filename: "index.js",
        libraryTarget: "umd",
        path: path.resolve("build"),
    },

    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        modules: [path.resolve("./src"), "node_modules"],
    },

    module: {
        rules: [
            {
                loaders: ["awesome-typescript-loader"],
                test: /\.ts$/,
            },
            {
                // For coverage testing
                enforce: "post",
                exclude: [/node_modules/],
                include: path.resolve("src"),
                loader: "istanbul-instrumenter-loader",
                test: /\.(ts)/,
            },
        ],
    },

    // Because docx is now targetting web
    // target: 'node',
};

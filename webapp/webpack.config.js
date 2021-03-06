module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: { filename: "bundle.js" },
    //resolve: { extensions: [".ts", ".js"] },
    resolve: { extensions: [".ts", ".js", ".css"] },
    module: {
        rules: [
            { test: /\.ts/, use: "ts-loader", exclude: /node_modules/ },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
        ]
    },
    devServer: {
        contentBase: "./assets",
        port: 4500
    }
};
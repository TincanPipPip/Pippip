module.exports = {
    mode: "development",
    output: {
        filename: "app.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: [["latest", { modules: true }]]
                }
            }
        ]
    }
};

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules:[ // En "rules" se cargan los loaders
            // loader de html
            {
                test: /\.html$/, // --> que archivo voy a buscar
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
}
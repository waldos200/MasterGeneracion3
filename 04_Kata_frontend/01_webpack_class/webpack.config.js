const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
            },
            {
                test: /\.scss$/,
                use: [ // El orden importa
                    //"style-loader", // Procesa los estilos en line
                    //"css/loader", // Procesa estilos en los archivos css
                    //"sass/loader" // procesa archivos scss (SASS)
                    MiniCssExtractPlugin.loader, 'css-loader', 
                    'sass-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}
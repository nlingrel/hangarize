const path = require('path')
const webpack = require('webpack')

const DIST_DIR = path.join(__dirname, './public')
const SRC_DIR = path.join(__dirname, './src')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    watch: true,
    entry: [`${SRC_DIR}/index.jsx`],
    output: {
        filename: 'bundle.js',
        path: path.resolve('./build'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: SRC_DIR,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        // New plugin
        new HtmlWebpackPlugin({
            // injects bundle.js to our new index.html
            inject: true,
            // copys the content of the existing index.html to the new /build index.html
            template: `${DIST_DIR}/index.html`,
        }),
    ],
}

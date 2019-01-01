const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './demo/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            '@rui/webj2ee-table': path.resolve(__dirname, 'src/')
        }
    },
    devtool: 'source-map',
    devServer: {
        publicPath: '/',
        port: 9000,
        open: true,
        hot: true,
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader' // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader' // translates CSS into CommonJS
                    },
                    {
                        loader: 'less-loader' // compiles Less to CSS
                    }
                ]
            }
        ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};

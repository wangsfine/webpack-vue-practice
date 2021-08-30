const path = require('path');
const Dotenv = require('dotenv-webpack');
const webpackMerge = require('webpack-merge').merge;
const baseConfig = require('./webpack.base.js');


module.exports = webpackMerge(baseConfig, {
    mode: 'development',
    devtool: 'eval-cheap-source-map',
    devServer: {
        static: path.resolve(__dirname, './dist'),
        port: 8000,
        host: '0.0.0.0',
        hot: true,
    },
    module: {
        rules: [
            // 处理样式文件
            {
                test: /\.(c|le)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader',
                ]
            },
        ],
    },
    plugins: [
        // 向应用程序中注入环境配置文件中的配置信息,通过process.env.xxx访问
        new Dotenv({
            path: path.resolve(__dirname, `./.env.development`),
        }),
    ],
})

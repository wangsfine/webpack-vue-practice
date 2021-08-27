const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const Dotenv = require('dotenv-webpack');



module.exports = function (env, argv) {
    return {
        target: 'web',
        mode: argv.mode,
        devtool: env.NODE_ENV === 'production' ? undefined : 'eval-cheap-source-map',
        devServer: {
            static: path.resolve(__dirname, './dist'),
            port: 8000,
            host: '0.0.0.0',
            hot: true,
        },
        entry: path.resolve(__dirname, './src/index.js'),
        output: {
            filename: 'static/js/[name].[contenthash].js',
            assetModuleFilename: 'static/assets/[name].[contenthash].[ext]',
            path: path.resolve(__dirname, './dist'),
            clean: true,
        },
        module: {
            rules: [
                // 处理静态资源
                {
                    test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                    type: "asset",
                },
                // 处理.js，.vue会自动引用该条规则
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                      loader: 'babel-loader',
                    }
                },
                // 处理样式文件
                {
                    test: /\.(c|le)ss$/,
                    use: [
                        argv.mode === 'production' ? MiniCssExtractPlugin.loader : 'vue-style-loader',
                        'css-loader',
                        'postcss-loader',
                        'less-loader',
                    ]
                },
                 // vue
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, './public/index.html'),
                title: 'vue app',
            }),
            // 必须引入该插件，它将其他规则应用到vue文件对应的资源中
            new VueLoaderPlugin(),
            // 抽离css到独立文件
            new MiniCssExtractPlugin({
                filename: 'static/style/[name].[contenthash].css',
            }),
            // 显示lint错误及警告信息
            new ESLintPlugin({
                failOnError: false,
                emitError: true,
                emitWarning: true,
                extensions: ['js', 'vue'], // lint js及vue
            }),
            // 向应用程序中注入环境配置文件中的配置信息,通过process.env.xxx访问
            new Dotenv({
                path: path.resolve(__dirname, `./.env.${env.NODE_ENV}`),
            })
        ],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, './src'),
            }
        },
        externals: {
            vue: 'Vue',
        },
        optimization: {
            minimize: true,
            minimizer: [
                '...',
                new CssMinimizerPlugin(),
            ],
            splitChunks: {
                chunks: 'all',
                // minChunks: 1,
                // cacheGroups: {

                // }
            }
        },
    };
}

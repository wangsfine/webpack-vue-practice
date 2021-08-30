const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const ESLintPlugin = require('eslint-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    target: 'web',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        filename: 'static/js/[name].[contenthash].js',
        assetModuleFilename: 'static/assets/[name].[contenthash].[ext]',
        chunkFilename: 'static/js/dynamic.[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.svg$/i,
                include: path.resolve(__dirname, './src/assets/svg'),
                exclude: /[\\/]node_modules[\\/]/,
                use: {
                    loader: 'svg-sprite-loader',
                    options: {
                        symbolId: 'icon-[name]',
                    }
                },
            },
            // 处理静态资源
            {
                test: /\.(eot|ttf|woff|woff2|png|jpg|gif)$/i,
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
        // 显示lint错误及警告信息
        new ESLintPlugin({
            failOnError: false,
            emitError: true,
            emitWarning: true,
            extensions: ['js', 'vue'], // lint js及vue
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './public/static'),
                    to: path.resolve(__dirname, './dist/static'),
                }
            ]
        }),
        // new BundleAnalyzerPlugin(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, './src'),
        }
    },
    // externals: {
    //     vue: 'Vue',
    // },
}
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const Dotenv = require('dotenv-webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const baseConfig = require('./webpack.base.js');
const webpackMerge = require('webpack-merge').merge;

module.exports = webpackMerge(baseConfig, {
        mode: 'production',
        devtool: undefined,
        module: {
            rules: [
                // 处理样式文件
                {
                    test: /\.(c|le)ss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'less-loader',
                    ]
                },
            ],
        },
        plugins: [
            // 抽离css到独立文件
            new MiniCssExtractPlugin({
                filename: 'static/style/[name].[contenthash].css',
            }),
            // 向应用程序中注入环境配置文件中的配置信息,通过process.env.xxx访问
            new Dotenv({
                path: path.resolve(__dirname, `./.env.production`),
            }),
            // new BundleAnalyzerPlugin(),
        ],
        optimization: {
            minimize: true,
            minimizer: [
                '...',
                new CssMinimizerPlugin(),
            ],
            runtimeChunk: 'single',
            moduleIds: 'deterministic',
            splitChunks: {
                chunks: 'all',
                // minChunks: 1,
                cacheGroups: {
                    iview: {
                        test: /[\\/]node_modules[\\/]view-design/,
                        name: 'iview',
                    },
                    framework: {
                        test: /[\\/]node_modules[\\/](vue|vue-router)/,
                        name: 'framework',
                    }
                }
            }
        },
});

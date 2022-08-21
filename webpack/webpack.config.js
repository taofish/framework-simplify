const path = require('path')
const RmDistPlugin = require('./plugins/rm-dist-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

module.exports = function (env, args) {
    const isPrd = args.mode === 'production'
    const fileName = isPrd ? '[name].[chunkhash:6]' : '[name]'
    return {
        // mode: 'development', // production、development
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: `js/${fileName}.js`,
            chunkFilename: `js/${fileName}.js`,
        },
        resolveLoader: {
            modules: [
                'node_modules',
                path.resolve(__dirname, 'loaders')
            ]
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: path.resolve(__dirname, 'src'),
                    use: {
                        loader: 'babel-loader',
                        options: {
                            plugins: ['lodash'],
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader']
                },
                {
                    test: /\.atxt$/,
                    use: [
                        {
                            loader: 'atxt-loader',
                            options: {
                                tao: true
                            }
                        }
                    ]
                }
            ]
        },
        optimization: {
            runtimeChunk: {
                name: 'runtime'
            },
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'js/vendors',
                        chunks: 'all'
                    }
                }
            },
            minimizer: [`...`, new CssMinimizerPlugin()]
        },
        // recordsPath: path.resolve(__dirname, 'dist/records.json'),
        plugins: [
            new RmDistPlugin({
                path: path.resolve(__dirname, 'dist')
            }),
            new HtmlWebpackPlugin(),
            new LodashModuleReplacementPlugin(),
            new MiniCssExtractPlugin({
                filename: `css/${fileName}.css`,
                chunkFilename: `css/${fileName}.css`,
            })
        ],
        devServer: {
            compress: true,
            port: 9000,
            open: true
        }
    }
}

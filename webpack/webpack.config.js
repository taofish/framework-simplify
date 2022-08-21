const path = require('path')
const RmDistPlugin = require('./plugins/rm-dist-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

module.exports = function (env, args) {
    const isPrd = args.mode === 'production'
    const fileName = isPrd ? '[name].[chunkhash:6].js' : '[name].js'
    return {
        // mode: 'development', // production、development
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: fileName,
            chunkFilename: `js/${fileName}`,
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
            }
        },
        // recordsPath: path.resolve(__dirname, 'dist/records.json'),
        plugins: [
            new RmDistPlugin({
                path: path.resolve(__dirname, 'dist')
            }),
            new HtmlWebpackPlugin(),
            new LodashModuleReplacementPlugin()
        ],
        devServer: {
            compress: true,
            port: 9000,
            open: true
        }
    }
}

const path = require('path')
const RmDistPlugin = require('./plugins/rm-dist-plugin')

module.exports = {
    mode: 'development', // production、development
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash:6].js'
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
        }
    },
    recordsPath: path.resolve(__dirname, 'dist/records.json'),
    plugins: [
        new RmDistPlugin({
            path: path.resolve(__dirname, 'dist')
        })
    ]
}

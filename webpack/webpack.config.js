const path = require('path')

module.exports = {
    mode: 'production', // production、development
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
                test: /utils\/test\.js$/,
                use: [
                    {
                        loader: 'test-loader',
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
    recordsPath: path.join(__dirname, 'dist/records.json')
}

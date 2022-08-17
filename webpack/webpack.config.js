const path = require('path')

module.exports = {
    mode: 'development', // production、development
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
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
                        loader: 'test',
                        options: {
                            tao: true
                        }
                    }
                ]
            }
        ]
    }
}

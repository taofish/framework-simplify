// import { getOptions } from 'loader-utils'
const { getOptions } = require('loader-utils')
// import validateOptions from 'schema-utils'

const schema = {
    type: 'object',
    properties: {
        test: {
            type: 'string'
        }
    }
}

module.exports = function(source, map, meta) {
    const options = getOptions(this)
    console.log('options', options)

    console.log(source, map, meta)

    // validateOptions(schema, options, 'Example Loader')

    // 对资源应用一些转换……

    return source
}

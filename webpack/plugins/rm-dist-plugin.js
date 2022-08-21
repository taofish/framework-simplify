const fs = require('fs')
const pluginName = 'RmDistPlugin'

class RmDistPlugin {
    path = ''

    constructor({ path = this.path } = {}) {
        this.path = path
    }

    apply(compiler) {
        compiler.hooks.emit.tap(pluginName, () => {
            if (compiler.options.mode === 'production' && this.path && fs.existsSync(this.path)) {
                try {
                    fs.rmdirSync(this.path, {
                        recursive: true
                    })
                    console.log(`目录'${this.path}'删除成功!`)
                } catch (e) {
                    console.log(e)
                }
            }
        })
    }
}

module.exports = RmDistPlugin

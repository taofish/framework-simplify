const fs = require('fs')
const pluginName = 'RmDistPlugin'

class RmDistPlugin {
    path = ''

    constructor({ path = this.path } = {}) {
        this.path = path
    }

    apply(compiler) {
        compiler.hooks.emit.tap(pluginName, (compilation) => {
            if (this.path && fs.existsSync(this.path)) {
                try {
                    fs.rmSync(this.path, {
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

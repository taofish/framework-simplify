module.exports = function(source) {
    const arr = source.split('\n').map(item => item.trim())
    return `export default ${JSON.stringify(arr)}`
}

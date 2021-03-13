const { parse } = require('yargs')

module.exports = () => {
  return (ctx) => {
    const flags = parse(ctx.args, {}, () => false)

    ctx.flags = flags
    ctx.args = flags._

    return true
  }
}

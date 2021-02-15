# Flags Middleware

Flags middleware for [discord-rose](https://npmjs.com/package/discord-rose)

## Install

`npm i @discord-rose/flags-middleware`

## Usage

Using the middleware will automatically parse traditional argv CLI options into CommandContext`.flags`, and change CommandContext`.args` to non-flags arguments. Using [yargs](https://npmjs.com/yargs)

**WARNING**: Doing this will edit your ctx.args, which can cause unexpected behavior. It does this by removing any non-flagged arguments

```js
const flagsMiddleware = require('@discord-rose/flags-middleware')

worker.commands
  .middleware(flagsMiddleware())
  .add({
    command: '!hello',
    exec: (ctx) => {
      if (ctx.flags.goodbye) ctx.reply('Bye!')
      else ctx.reply('World!')

      if (ctx.flags.abc === 'def') ctx.reply('Secret found ;)')
    }
  })
```

In this situation, if a user were to run `!hello --goodbye` will respond with the "Bye!" reply.
And if someone runs `!hello --abc def` it will send the secret.

Anything without a value with by set to a boolean, check yargs for more info on how everything is parsed.

For example
`!hello world -abc --def ghi -j k`
Will result in

`ctx.flags`: 
```js
{
  a: true,
  b: true,
  c: true,
  def: 'ghi',
  j: 'k'
}
```
`ctx.args`: `['world']` (this is due to the afformentioned args editing)
declare module 'discord-rose/dist/typings/lib' {
  interface CommandContext {
    flags: {
      [key: string]: string | boolean
    }
  }
}

declare const _default: () => (ctx: CommandContext) => boolean

export default _default
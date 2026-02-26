// src/plugins/logger.plugin.ts

import type { App, InjectionKey } from 'vue'

export interface Logger {
  log(message: string): void
}

export const LoggerKey: InjectionKey<Logger> = Symbol('Logger')

export const LoggerPlugin = {
  install(app: App) {
    const logger: Logger = {
      log(message: string) {
        console.log('[APP]', message)
      },
    }

    app.provide(LoggerKey, logger)
  },
}
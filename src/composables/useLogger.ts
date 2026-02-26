// src/composables/useLogger.ts

import { inject } from 'vue'
import { LoggerKey } from '@/plugins/logger.plugin'

export function useLogger() {
  const logger = inject(LoggerKey)

  if (!logger) {
    throw new Error('Logger not provided')
  }

  return logger
}
// logger/transports.ts

import * as Sentry from '@sentry/react-native';
import { BubblyError } from './BubblyError';
import { pushDump } from './dump';

export type Transport = (
  level: Sentry.SeverityLevel,
  message: string | BubblyError,
  meta?: Record<string, unknown>
) => void;

/* ---------- Console ---------- */

export const consoleTransport: Transport = (level, message, meta = {}) => {
  const time = new Date().toISOString();
  const output =
    message instanceof Error ? message.toString() : message;

  console.log(`[${time}] [${level.toUpperCase()}]`, output, meta);

  pushDump({ time, level, message: output, meta });
};

/* ---------- Sentry ---------- */

export const sentryTransport: Transport = (level, message, meta = {}) => {
  if (typeof message === 'string') {
    Sentry.addBreadcrumb({
      message,
      data: meta,
      level:level as Sentry.SeverityLevel,
    });
    return;
  }
Sentry.captureException(message,{
    extra:meta,
    level:level as Sentry.SeverityLevel,
})
};

// logger/index.ts

import { BubblyError } from './BubblyError';
import { DebugContext } from './debugContext';
import { Logger } from './Logger';
import { consoleTransport, sentryTransport } from './transports';

const isDev = __DEV__;
const isProd = !__DEV__;

export const logger = new Logger({
  level: isDev ? 'debug' : 'warning',
  debug: process.env.LOG_DEBUG,
});

logger.addTransport(consoleTransport);

if (isProd) {
  logger.addTransport(sentryTransport);
}

export { BubblyError, DebugContext };

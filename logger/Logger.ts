import * as Sentry from "@sentry/react-native";
import { BubblyError } from "./BubblyError";
import { DebugContextKey } from "./debugContext";
import { getExperimentalFlag } from "./experimental";
import { Transport } from "./transports";

/* ---------------- In-memory dump ---------------- */

const logBuffer: object[] = [];
const MAX_LIFETIME = 60_000;
const startedAt = Date.now();

export const dumpLogs = () => JSON.stringify(logBuffer, null, 2);

function pushLog(entry: object) {
  if (!getExperimentalFlag("LOG_PUSH")) return;
  if (Date.now() - startedAt > MAX_LIFETIME) return;
  logBuffer.push(entry);
}

/* ---------------- Logger ---------------- */

export class Logger {
  private transports: Transport[] = [];
  private level: Sentry.SeverityLevel = "info";
  private debugScopes: RegExp[] = [];

  constructor({
    level,
    debug,
  }: {
    level?: Sentry.SeverityLevel;
    debug?: string;
  } = {}) {
    if (level) this.level = level;

    if (debug) {
      this.debugScopes = debug
        .split(",")
        .map(v => new RegExp(v.replace("*", ".*")));
    }
  }

  addTransport(transport: Transport) {
    this.transports.push(transport);
  }

  private canLog(level: Sentry.SeverityLevel) {
    if (!getExperimentalFlag("LOG_ENABLED")) return false;

    if (getExperimentalFlag("DEBUG_VERBOSE")) return true;

    const order: Sentry.SeverityLevel[] = [
      "debug",
      "info",
      "warning",
      "error",
      "fatal",
    ];

    return order.indexOf(level) >= order.indexOf(this.level);
  }

  private dispatch(
    level: Sentry.SeverityLevel,
    message: string | BubblyError,
    meta?: Record<string, unknown>
  ) {
    if (!this.canLog(level)) return;

    const payload = {
      timestamp: Date.now(),
      level,
      message: message.toString(),
      meta,
    };

    // In-memory dump
    pushLog(payload);

    // Transports
    this.transports.forEach(t => {
      if (!getExperimentalFlag("SENTRY_ENABLED") && t.name === "sentry") {
        return;
      }
      t(level, message, meta);
    });
  }

  debug(message: string, meta = {}, context?: DebugContextKey) {
    if (
      context &&
      !this.debugScopes.some(rx => rx.test(context))
    ) {
      return;
    }
    this.dispatch("debug", message, meta);
  }

  info(message: string, meta = {}) {
    this.dispatch("info", message, meta);
  }

  warn(message: string, meta = {}) {
    this.dispatch("warning", message, meta);
  }

  error(error: BubblyError, meta = {}) {
    this.dispatch("error", error, meta);
  }

  fatal(error: BubblyError, meta = {}) {
    this.dispatch("fatal", error, meta);
  }
}

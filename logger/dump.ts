// logger/dump.ts

let enabled = true;
const startedAt = Date.now();
const MAX_DURATION = 60_000;

const lines: object[] = [];

export function pushDump(line: object) {
  if (!enabled) return;

  lines.push(line);

  if (Date.now() - startedAt > MAX_DURATION) {
    enabled = false;
  }
}

export function dumpLogs() {
  return JSON.stringify(lines, null, 2);
}

import { createMMKV } from "react-native-mmkv";

const storage = createMMKV({ id: "EXPERIMENTAL_FLAGS" });

export type ExperimentalKey =
  | "LOG_ENABLED"
  | "LOG_PUSH"
  | "SENTRY_ENABLED"
  | "DEBUG_VERBOSE";

const defaults: Record<ExperimentalKey, boolean> = {
  LOG_ENABLED: true,
  LOG_PUSH: false,
  SENTRY_ENABLED: true,
  DEBUG_VERBOSE: false,
};

export function getExperimentalFlag(key: ExperimentalKey): boolean {
  const value = storage.getBoolean(key);
  return value ?? defaults[key];
}

// logger/debugContext.ts

export const DebugContext = {
    chat: 'chat',
    notifications: 'notifications',
    api: 'api',
    auth: 'auth',
    storage: 'storage',
    startup: 'startup',
  } as const;
  
  export type DebugContextKey =
    (typeof DebugContext)[keyof typeof DebugContext];
  
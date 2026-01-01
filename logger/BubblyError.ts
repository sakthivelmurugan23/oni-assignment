// logger/BubblyError.ts

export class BubblyError extends Error {
    cause?: unknown;
  
    constructor(message: string, cause?: unknown) {
      super(message);
      this.name = 'BubblyError';
      this.cause = cause;
    }
  
    toString() {
      if (this.cause instanceof Error) {
        return `${this.message} → ${this.cause.message}`;
      }
      if (this.cause) {
        return `${this.message} → ${String(this.cause)}`;
      }
      return this.message;
    }
  }
  
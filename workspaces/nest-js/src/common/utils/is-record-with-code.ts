export const isRecordWithCode = (obj: unknown): obj is { code: string } => {
  return typeof obj === 'object' && obj !== null && 'code' in obj;
};

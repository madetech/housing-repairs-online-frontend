// Temp solution to replace Sentry

export const logger = {
  captureException: (e) => console.error(e),
};

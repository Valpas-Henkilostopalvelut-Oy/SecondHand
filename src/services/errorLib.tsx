export const onError = (error: Error) => {
  const message = error.toString();

  if (!(error instanceof Error) && message) {
    alert(message);
  }
};

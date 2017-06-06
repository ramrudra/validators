export const transformYupValidationErrors = (res) => {
  if (res === null || typeof res !== 'object') {
    return {};
  }

  return res.inner.reduce((acc, item) =>
    ({ ...acc, ...{ [item.path]: item.errors.join() } })
  , { _error: res.message });
};

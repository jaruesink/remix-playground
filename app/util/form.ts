import set from 'lodash/set';

export const formDataToObject: <T>(formData: FormData) => Record<string, T> = (
  formData: FormData
) =>
  Object.entries(Object.fromEntries(formData)).reduce(
    (acc, curr) => set(acc, curr[0], curr[1]),
    {}
  );

const toFormData = (reactiveObject: Record<string, any>): FormData => {
  const formData = new FormData();

  for (const key in reactiveObject) {
    if (reactiveObject[key]) {
      formData.append(key, reactiveObject[key]);
    }
  }

  return formData;
};

export default toFormData;

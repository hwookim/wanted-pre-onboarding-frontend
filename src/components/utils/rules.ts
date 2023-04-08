const rules = {
  email: (value: string) => value.includes('@'),
  password: (value: string) => value.length >= 8,
};

export default rules;

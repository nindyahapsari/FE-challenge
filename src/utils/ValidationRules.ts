type ValidationRule = {
  type: "required" | "maxLength" | "pattern";
  value: number | RegExp | boolean;
  message: string;
};

function validateInput(value: string, rules: ValidationRule[]): string {
  for (const rule of rules) {
    if (rule.type === "required" && !value) {
      return rule.message;
    }

    if (
      rule.type === "maxLength" &&
      typeof rule.value === "number" &&
      value.length > rule.value
    ) {
      return rule.message;
    }

    if (rule.type === "pattern" && !rule.value.test(value)) {
      return rule.message;
    }
  }

  return "";
}

export { ValidationRule, validateInput };

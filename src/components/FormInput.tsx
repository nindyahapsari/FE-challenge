// src/components/ReusableInput.tsx
import React, { useState } from "react";
import { SetFormField } from "../App";
import { validateInput, ValidationRule } from "../utils/ValidationRules";

type FormInputProps = {
  id: string;
  label: string;
  placeholderText: string;
  type: string;
  value: string;
  setFormField: SetFormField;
  validationRules: ValidationRule[];
};

function FormInput({
  id,
  label,
  placeholderText,
  type,
  value,
  setFormField,
  validationRules,
}: FormInputProps) {
  const [isTouched, setIsTouched] = useState(false);

  const error = isTouched ? validateInput(value, validationRules) : "";

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col">
        <label htmlFor={id} className="text-3xl my-24 font-bold text-center">
          {label}
        </label>
        <input
          type={type}
          id={id}
          placeholder={placeholderText}
          className="border-2 border-gray-300 bg-transparent p-2 rounded-md mx-2 focus:border-blue-500 focus:outline-none"
          value={value}
          onChange={(e) => setFormField(id, e.target.value)}
          onBlur={() => setIsTouched(true)}
        />
        {error && <p className="text-red-500 m-2">{error}</p>}
      </div>
    </div>
  );
}

export default FormInput;

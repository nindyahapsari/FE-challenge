import React, { useState } from "react";
import { FormState, SetFormField } from "../App";
import { validateInput } from "../utils/ValidationRules";

type FullNameProps = {
  formState: FormState;
  setFormField: SetFormField;
};

function FullName({ formState, setFormField }: FullNameProps) {
  const [isFullnameTouched, setIsFullnameTouched] = useState(false);

  const firstNameError = isFullnameTouched
    ? validateInput(formState.fullName, [
        { type: "required", value: true, message: "Full name is required" },
        { type: "maxLength", value: 10, message: "Full name is too long" },
      ])
    : "";

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col">
        <label htmlFor="firstName" className="mb-2 font-bold text-lg text-left">
          Full Name
        </label>
        <input
          type="text"
          id="firstName"
          className="border-2 border-gray-300 p-2 rounded-md"
          value={formState.fullName}
          onChange={(e) => setFormField("fullName", e.target.value)}
          onBlur={() => setIsFullnameTouched(true)}
        />
        {firstNameError && <p className="text-red-500">{firstNameError}</p>}
      </div>
    </div>
  );
}

export default FullName;
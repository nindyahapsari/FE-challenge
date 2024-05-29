import React, { useState } from "react";
import { FormState, SetFormField } from "../App";
import { validateInput } from "../utils/ValidationRules";

type EmailProps = {
  formState: FormState;
  setFormField: SetFormField;
};

function Email({ formState, setFormField }: EmailProps) {
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const emailError = isEmailTouched
    ? validateInput(formState.email, [
        { type: "required", value: true, message: "Email is required" },
      ])
    : "";

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-2 font-bold text-lg text-left">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="border-2 border-gray-300 p-2 rounded-md"
          value={formState.fullName}
          onChange={(e) => setFormField("fullName", e.target.value)}
          onBlur={() => setIsEmailTouched(true)}
        />

        {emailError && <p className="text-red-500">{emailError}</p>}
      </div>
    </div>
  );
}

export default Email;

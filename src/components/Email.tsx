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
        <label htmlFor="email" className="text-3xl my-10 font-bold text-center">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="border-2 border-gray-300 bg-transparent p-2 rounded-md"
          value={formState.email}
          onChange={(e) => setFormField("email", e.target.value)}
          onBlur={() => setIsEmailTouched(true)}
        />

        {emailError && <p className="text-red-500">{emailError}</p>}
      </div>
    </div>
  );
}

export default Email;

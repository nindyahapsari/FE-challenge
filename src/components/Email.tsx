import React from "react";
import { UserState, SetFormField } from "../App";
import FormInput from "./FormInput";

type EmailProps = {
  user: UserState;
  setFormField: SetFormField;
};

function Email({ user, setFormField }: EmailProps) {
  return (
    <FormInput
      id="email"
      label="Email"
      placeholderText="Enter your email address"
      type="email"
      value={user.email}
      setFormField={setFormField}
      validationRules={[
        { type: "required", value: true, message: "Email is required" },
        {
          type: "pattern",
          value: /^\S+@\S+\.\S+$/,
          message: "Email is not valid",
        },
      ]}
    />
  );
}

export default Email;

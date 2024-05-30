import React from "react";
import { UserState, SetFormField } from "../App";

import FormInput from "./FormInput";

type FullNameProps = {
  user: UserState;
  setFormField: SetFormField;
};

function FullName({ user, setFormField }: FullNameProps) {
  return (
    <FormInput
      id="fullName"
      label="Full Name"
      placeholderText="Enter your full name"
      type="text"
      value={user.fullName}
      setFormField={setFormField}
      validationRules={[
        { type: "required", value: true, message: "Full name is required" },
        { type: "maxLength", value: 20, message: "Full name is too long" },
      ]}
    />
  );
}

export default FullName;

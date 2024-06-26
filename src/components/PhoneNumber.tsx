import React from "react";
import { UserState, SetFormField } from "../App";
import FormInput from "./FormInput";

type PhoneNumberProps = {
  user: UserState;
  setFormField: SetFormField;
};

function PhoneNumber({ user, setFormField }: PhoneNumberProps) {
  return (
    <FormInput
      id="phoneNumber"
      label="Phone Number"
      placeholderText="Enter your phone number"
      type="tel"
      value={user.phoneNumber}
      setFormField={setFormField}
      validationRules={[
        { type: "required", value: true, message: "Phone number is required" },
        {
          type: "pattern",
          value: /^\d{10}$/,
          message: "Phone number should be 10 digits",
        },
      ]}
    />
  );
}

export default PhoneNumber;

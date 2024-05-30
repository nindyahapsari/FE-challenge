import React, { useState } from "react";
import { UserState, SetFormField } from "../App";
import { validateInput } from "../utils/ValidationRules";

type PhoneNumberProps = {
  user: UserState;
  setFormField: SetFormField;
};

function PhoneNumber({ user, setFormField }: PhoneNumberProps) {
  const [isPhoneNumberTouched, setIsPhoneNumberTouched] = useState(false);

  const phoneNumberError = isPhoneNumberTouched
    ? validateInput(user.phoneNumber, [
        { type: "required", value: true, message: "Phone number is required" },
        {
          type: "pattern",
          value: /^[0-9]*$/,
          message: "Phone number must contain only numbers",
        },
      ])
    : "";

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col">
        <label
          htmlFor="phoneNumber"
          className="text-3xl my-10 font-bold text-center"
        >
          Phone number
        </label>
        <input
          type="email"
          id="email"
          className="border-2 border-gray-300 bg-transparent p-2 rounded-md"
          value={user.phoneNumber}
          onChange={(e) => setFormField("phoneNumber", e.target.value)}
          onBlur={() => setIsPhoneNumberTouched(true)}
        />

        {phoneNumberError && <p className="text-red-500">{phoneNumberError}</p>}
      </div>
    </div>
  );
}

export default PhoneNumber;

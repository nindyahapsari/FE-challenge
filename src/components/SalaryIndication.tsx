import React, { useState } from "react";
import { FormState, SetFormField } from "../App";
import { validateInput } from "../utils/ValidationRules";

type SalaryIndicationProps = {
  formState: FormState;
  setFormField: SetFormField;
};

const salaryRanges = [
  { id: "0-1000", label: "0 - 1.000" },
  { id: "1000-2000", label: "1.000 - 2.000" },
  { id: "2000-3000", label: "2.000 - 3.000" },
  { id: "3000-4000", label: "3.000 - 4.000" },
  { id: "4000+", label: "Mehr als 4.000" },
];

function SalaryIndication({ formState, setFormField }: SalaryIndicationProps) {
  function handleOptionChange(event) {
    setFormField("salaryRange", event.target.value);
  }

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col">
        <label
          htmlFor="salaryIndication"
          className="mb-2 font-bold text-lg text-left"
        >
          Salary range
        </label>

        {salaryRanges.map((range) => (
          <div key={range.id}>
            <input
              type="radio"
              id={range.id}
              name="salary"
              value={range.id}
              checked={formState.salaryRange === range.id}
              onChange={handleOptionChange}
              className="mr-2"
            />
            <label htmlFor={range.id}>{range.label}</label>
          </div>
        ))}

        {/* {emailError && <p className="text-red-500">{emailError}</p>} */}
      </div>
    </div>
  );
}

export default SalaryIndication;

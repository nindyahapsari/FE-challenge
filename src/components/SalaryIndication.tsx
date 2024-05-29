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
    <div className="flex flex-col items-start justify-center space-y-4">
      <div className="flex flex-col">
        <label
          htmlFor="salaryIndication"
          className="text-3xl my-10 font-bold text-center"
        >
          Salary range
        </label>

        <div className="px-10">
          {salaryRanges.map((range) => (
            <div key={range.id} className="flex items-center my-5">
              <input
                type="radio"
                id={range.id}
                name="salary"
                value={range.id}
                checked={formState.salaryRange === range.id}
                onChange={handleOptionChange}
                className="mr-2 w-5"
              />
              <label htmlFor={range.id} className="text-3xl text-left">
                {range.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SalaryIndication;

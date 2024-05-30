import React from "react";
import { UserState, SetFormField } from "../App";

type SalaryIndicationProps = {
  user: UserState;
  setFormField: SetFormField;
};

const salaryRanges = [
  { id: "0-1000", label: "0 - 1.000" },
  { id: "1000-2000", label: "1.000 - 2.000" },
  { id: "2000-3000", label: "2.000 - 3.000" },
  { id: "3000-4000", label: "3.000 - 4.000" },
  { id: "4000+", label: "Mehr als 4.000" },
];

function SalaryIndication({ user, setFormField }: SalaryIndicationProps) {
  function handleOptionChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormField("salaryRange", event.target.value);
  }

  return (
    <div className="flex flex-col justify-center space-y-4">
      <div className="flex flex-col justify-center items-center">
        <label
          htmlFor="salaryIndication"
          className="text-3xl my-14 font-bold text-center"
        >
          Salary range
        </label>

        <div className="px-10 space-y-5">
          {salaryRanges.map((range, index) => (
            <label
              key={`salaryRange-${index}`}
              htmlFor={range.id}
              className="flex flex-row items-center justify-center text-3xl text-left"
            >
              <input
                type="radio"
                id={range.id}
                name="salary"
                value={range.id}
                checked={user.salaryRange === range.id}
                onChange={handleOptionChange}
                className="mr-2 w-5 h-5 text-blue-600 bg-gray-800"
              />

              <span>{range.label} </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SalaryIndication;

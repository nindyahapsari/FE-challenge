import React, { useState } from "react";
import { FormState, SetFormField } from "../App";

type SummaryProps = {
  formState: FormState;
};

function Summary({ formState }: SummaryProps) {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col">
        <h1 className="mb-2 font-bold text-lg text-left">Summary</h1>
        <p>Full Name: {formState.fullName}</p>
        <p>Email: {formState.email}</p>
        <p>Phone Number: {formState.phoneNumber}</p>
        <p>Salary Range: {formState.salaryRange}</p>
      </div>
    </div>
  );
}

export default Summary;

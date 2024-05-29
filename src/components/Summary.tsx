import React, { useState } from "react";
import { FormState } from "../App";

type SummaryProps = {
  formState: FormState;
};

function Summary({ formState }: SummaryProps) {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col">
        <p className="text-3xl my-10 font-bold text-center">Summary</p>
        <div className="border-1">
          <p className="text-2xl my-10 text-center">
            Full Name: {formState.fullName}
          </p>
          <p className="text-2xl my-10 text-center">Email: {formState.email}</p>
          <p className="text-2xl my-10 text-center">
            Phone Number: {formState.phoneNumber}
          </p>
          <p className="text-2xl my-10 text-center">
            Salary Range: {formState.salaryRange}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Summary;

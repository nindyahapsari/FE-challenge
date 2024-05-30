import React from "react";
import { UserState } from "../App";

type SummaryProps = {
  user: UserState;
};

function Summary({ user }: SummaryProps) {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col">
        <p className="text-3xl my-10 font-bold text-center">Summary</p>
        <div className="border-1">
          <p className="text-2xl my-10 text-center">
            Full Name: {user.fullName}
          </p>
          <p className="text-2xl my-10 text-center">Email: {user.email}</p>
          <p className="text-2xl my-10 text-center">
            Phone Number: {user.phoneNumber}
          </p>
          <p className="text-2xl my-10 text-center">
            Salary Range: {user.salaryRange}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Summary;

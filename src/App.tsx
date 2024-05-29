import React, { useState } from "react";
import "./App.css";

import FullName from "./components/FullName";
import Email from "./components/Email";
import PhoneNumber from "./components/PhoneNumber";
import SalaryIndication from "./components/SalaryIndication";
import Summary from "./components/Summary";

export type FormState = {
  fullName: string;
  email: string;
  phoneNumber: string;
  salaryRange: string;
  error: string;
};

export type SetFormField = (field: keyof FormState, value: string) => void;

function App() {
  const [formState, setFormState] = useState<FormState>({
    fullName: "",
    email: "",
    phoneNumber: "",
    salaryRange: "",
    error: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const setFormField: SetFormField = (field, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  function nextStep() {
    setCurrentStep((prevStep) => prevStep + 1);
  }

  function prevStep() {
    setCurrentStep((prevStep) => prevStep - 1);
  }

  return (
    <>
      <>
        {currentStep === 1 && (
          <FullName formState={formState} setFormField={setFormField} />
        )}

        {currentStep === 2 && (
          <Email formState={formState} setFormField={setFormField} />
        )}

        {currentStep === 3 && (
          <PhoneNumber formState={formState} setFormField={setFormField} />
        )}

        {currentStep === 4 && (
          <SalaryIndication formState={formState} setFormField={setFormField} />
        )}

        {currentStep === 5 && <Summary formState={formState} />}

        <div className="my-3 flex flex-row justify-around">
          <button
            className="my-3"
            disabled={!formState.fullName}
            onClick={prevStep}
          >
            Prev
          </button>
          <div className="flex justify-center space-x-2 mx-5">
            <span>
              {currentStep} / {totalSteps}
            </span>
          </div>
          <button
            className="my-3"
            disabled={!formState.fullName}
            onClick={nextStep}
          >
            Next
          </button>
        </div>
      </>
    </>
  );
}

export default App;

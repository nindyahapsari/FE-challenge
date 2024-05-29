import React, { useState } from "react";
import "./App.css";

import FullName from "./components/FullName";
import Email from "./components/Email";
import PhoneNumber from "./components/PhoneNumber";
import SalaryIndication from "./components/SalaryIndication";

export type FormState = {
  fullName: string;
  email: string;
  error: string;
};

export type SetFormField = (field: keyof FormState, value: string) => void;

function App() {
  const [formState, setFormState] = useState<FormState>({
    fullName: "",
    email: "",
    error: "",
  });
  const [currentStep, setCurrentStep] = useState(1);

  const setFormField: SetFormField = (field, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <>
      <div>
        {currentStep === 1 && (
          <FullName formState={formState} setFormField={setFormField} />
        )}

        {currentStep === 2 && (
          <Email formState={formState} setFormField={setFormField} />
        )}

        <button
          className="my-3"
          disabled={!formState.fullName}
          onClick={nextStep}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import FullName from "./components/FullName";
import Email from "./components/Email";
import PhoneNumber from "./components/PhoneNumber";
import SalaryIndication from "./components/SalaryIndication";
import Summary from "./components/Summary";
import ProgressButtons from "./components/ProgressButtons";

export type FormState = {
  fullName: string;
  email: string;
  phoneNumber: string;
  salaryRange: string;
};

export type SetFormField = (field: keyof FormState, value: string) => void;

const formSteps = [
  { component: FullName, key: "fullName" },
  { component: Email, key: "email" },
  { component: PhoneNumber, key: "phoneNumber" },
  { component: SalaryIndication, key: "salaryRange" },
  { component: Summary, key: "summary" },
];

function App() {
  const [formState, setFormState] = useState<FormState>({
    fullName: "",
    email: "",
    phoneNumber: "",
    salaryRange: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = formSteps.length;

  const setFormField: SetFormField = (field, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  function nextStep() {
    if (currentStep < totalSteps) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  }

  function prevStep() {
    if (currentStep === 1) return;
    setCurrentStep((prevStep) => prevStep - 1);
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex-grow flex-2 w-full overflow-auto flex flex-col justify-center items-center">
        <Navbar />

        <div className="w-96 h-80">
          {formSteps.map((step, index) => {
            const StepComponent = step.component;
            return (
              currentStep === index + 1 && (
                <StepComponent
                  formState={formState}
                  setFormField={setFormField}
                />
              )
            );
          })}
        </div>
      </div>

      <ProgressButtons
        currentStep={currentStep}
        totalSteps={totalSteps}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    </div>
  );
}

export default App;

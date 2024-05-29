import React, { useState } from "react";
import "./App.css";

import FullName from "./components/FullName";
import Email from "./components/Email";
import PhoneNumber from "./components/PhoneNumber";
import SalaryIndication from "./components/SalaryIndication";

export type FormState = {
  fullName: string;
  error: string;
};

export type SetFormField = (field: keyof FormState, value: string) => void;

function App() {
  const [formState, setFormState] = useState<FormState>({
    fullName: "",
    error: "",
  });

  const setFormField: SetFormField = (field, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <>
      <div>
        <FullName formState={formState} setFormField={setFormField} />
      </div>
    </>
  );
}

export default App;

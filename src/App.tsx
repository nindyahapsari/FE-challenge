import { useState } from "react";
import "./App.css";

import FullName from "./components/FullName";
import Email from "./components/Email";
import PhoneNumber from "./components/PhoneNumber";
import SalaryIndication from "./components/SalaryIndication";

//create one page
//components for fields of full name
//components for fields of email
//components for fields of phone number
//components for salary indication with radio buttons

function App() {
  return (
    <>
      <div>
        <FullName />
        <Email />
        <PhoneNumber />
        <SalaryIndication />
      </div>
    </>
  );
}

export default App;

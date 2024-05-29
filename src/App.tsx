import { useState } from "react";
import "./App.css";

import FullName from "./components/FullName";
import Email from "./components/Email";
import PhoneNumber from "./components/PhoneNumber";
import SalaryIndication from "./components/SalaryIndication";

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

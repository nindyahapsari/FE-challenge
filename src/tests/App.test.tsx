import React from "react";

import { render, RenderResult, screen } from "@testing-library/react";
import { ReactElement } from "react";

import App from "../App";
import FullName from "../components/FullName";
import Email from "../components/Email";
import PhoneNumber from "../components/PhoneNumber";
import SalaryIndication from "../components/SalaryIndication";
import Summary from "../components/Summary";

describe("App component", () => {
  test("it should renders dummy logo", () => {
    render(<App />);
    const dummyLogo = screen.getByText(/Buena/i);
    expect(dummyLogo).toBeInTheDocument();
  });

  describe("Form Components", () => {
    describe("FullName component", () => {
      test("it should renders FullName component with label text", () => {
        const mockUser = {
          fullName: "John Doe",
          email: "",
          phoneNumber: "",
          salaryRange: "",
        };
        render(<FullName user={mockUser} setFormField={() => {}} />);
        const fieldElement = screen.getByText("Full Name");
        expect(fieldElement).toBeInTheDocument();
      });
    });

    describe("Email component", () => {
      test("renders Email component with label text", () => {
        const mockUser = {
          email: "test@testmail.com",
          fullName: "",
          phoneNumber: "",
          salaryRange: "",
        };
        render(<Email user={mockUser} setFormField={() => {}} />);
        const fieldElement = screen.getByText("Email");
        expect(fieldElement).toBeInTheDocument();
      });
    });

    describe("PhoneNumber component", () => {
      test("renders PhoneNumber component with label text", () => {
        const mockUser = {
          email: "",
          fullName: "",
          phoneNumber: "12344567",
          salaryRange: "",
        };
        render(<PhoneNumber user={mockUser} setFormField={() => {}} />);
        const fieldElement = screen.getByText("Phone number");
        expect(fieldElement).toBeInTheDocument();
      });
    });

    describe("SalaryIndication component", () => {
      test("renders SalaryIndication component with label text", () => {
        const mockUser = {
          email: "",
          fullName: "",
          phoneNumber: "",
          salaryRange: "3.000 - 4.000",
        };
        render(<SalaryIndication user={mockUser} setFormField={() => {}} />);
        const fieldElement = screen.getByText("Salary range");
        expect(fieldElement).toBeInTheDocument();
      });
    });

    describe("Sumarry component", () => {
      const mockUser = {
        email: "user@testmail.com",
        fullName: "Nindya Hapsari",
        phoneNumber: "1234567",
        salaryRange: "3.000 - 4.000",
      };

      test("renders Summary component title", () => {
        render(<Summary user={mockUser} />);
        const fieldElement = screen.getByText("Summary");
        expect(fieldElement).toBeInTheDocument();
      });

      test("renders Summary component with user data", () => {
        render(<Summary user={mockUser} />);

        const fullName = screen.getByText(`Full Name: ${mockUser.fullName}`);
        expect(fullName).toBeInTheDocument();

        const email = screen.getByText(`Email: ${mockUser.email}`);
        expect(email).toBeInTheDocument();

        const phoneNumber = screen.getByText(
          `Phone Number: ${mockUser.phoneNumber}`
        );
        expect(phoneNumber).toBeInTheDocument();

        const salaryRange = screen.getByText(
          `Salary Range: ${mockUser.salaryRange}`
        );
        expect(salaryRange).toBeInTheDocument();
      });
    });
  });
});

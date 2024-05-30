import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, vi } from "vitest";

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
          fullName: "Ada Lovelace",
          email: "",
          phoneNumber: "",
          salaryRange: "",
        };
        render(<FullName user={mockUser} setFormField={() => {}} />);
        const fieldElement = screen.getByText("Full Name");
        expect(fieldElement).toBeInTheDocument();
      });

      test("calls setFormField on input change", () => {
        const mockUser = {
          fullName: "",
          email: "",
          phoneNumber: "",
          salaryRange: "",
        };
        const mockSetFormField = vi.fn();
        const { getByPlaceholderText } = render(
          <FullName user={mockUser} setFormField={mockSetFormField} />
        );
        const input = getByPlaceholderText("Enter your full name");
        fireEvent.change(input, { target: { value: "Johnny" } });
        expect(mockSetFormField).toHaveBeenCalledTimes(1);
        expect(mockSetFormField).toHaveBeenCalledWith("fullName", "Johnny");
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
        const fieldElement = screen.getByText("Phone Number");
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

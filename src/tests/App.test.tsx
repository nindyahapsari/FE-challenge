import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, vi } from "vitest";

import App from "../App";
import FullName from "../components/FullName";
import Email from "../components/Email";
import PhoneNumber from "../components/PhoneNumber";
import SalaryIndication from "../components/SalaryIndication";
import Summary from "../components/Summary";
import ProgressButtons from "../components/ProgressButtons";

describe("App component", () => {
  test("it should render dummy logo", () => {
    render(<App />);
    const dummyLogo = screen.getByText(/Buena/i);
    expect(dummyLogo).toBeInTheDocument();
  });

  describe("Form Components", () => {
    describe("ProgressButtons component", () => {
      test("it should render ProgressButtons component with next button", () => {
        const mockCurrentStep = 1;
        const mockTotalSteps = 5;
        render(
          <ProgressButtons
            currentStep={mockCurrentStep}
            totalSteps={mockTotalSteps}
            nextStep={() => {}}
            prevStep={() => {}}
          />
        );
        const nextButton = screen.getByRole("button", { name: "next" });
        expect(nextButton).toBeInTheDocument();
      });

      test("it should call nextStep on next button click", () => {
        const mockCurrentStep = 1;
        const mockTotalSteps = 5;
        const mockNextStep = vi.fn();
        render(
          <ProgressButtons
            currentStep={mockCurrentStep}
            totalSteps={mockTotalSteps}
            nextStep={mockNextStep}
            prevStep={() => {}}
          />
        );
        const nextButton = screen.getByRole("button", { name: "next" });
        fireEvent.click(nextButton);
        expect(mockNextStep).toHaveBeenCalledTimes(1);
      });

      test("it should render ProgressButtons component with previous button", () => {
        const mockCurrentStep = 2;
        const mockTotalSteps = 5;
        render(
          <ProgressButtons
            currentStep={mockCurrentStep}
            totalSteps={mockTotalSteps}
            nextStep={() => {}}
            prevStep={() => {}}
          />
        );
        const prevButton = screen.getByRole("button", { name: "previous" });
        expect(prevButton).toBeInTheDocument();
      });

      test("it should call prevStep on previous button click", () => {
        const mockCurrentStep = 2;
        const mockTotalSteps = 5;
        const mockPrevStep = vi.fn();
        render(
          <ProgressButtons
            currentStep={mockCurrentStep}
            totalSteps={mockTotalSteps}
            nextStep={() => {}}
            prevStep={mockPrevStep}
          />
        );
        const prevButton = screen.getByRole("button", { name: "previous" });
        fireEvent.click(prevButton);
        expect(mockPrevStep).toHaveBeenCalledTimes(1);
      });
    });

    describe("FullName component", () => {
      test("it should render FullName component with label text", () => {
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

      test("it should call setFormField on input change", () => {
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
      test("it should render Email component with label text", () => {
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
      test("it should render PhoneNumber component with label text", () => {
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
      test("it should render SalaryIndication component with label text", () => {
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

    describe("Summary component", () => {
      const mockUser = {
        email: "user@testmail.com",
        fullName: "Nindya Hapsari",
        phoneNumber: "1234567",
        salaryRange: "3.000 - 4.000",
      };

      test("it should render Summary component title", () => {
        render(<Summary user={mockUser} />);
        const fieldElement = screen.getByText("Summary");
        expect(fieldElement).toBeInTheDocument();
      });

      test("it should render Summary component with user data", () => {
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

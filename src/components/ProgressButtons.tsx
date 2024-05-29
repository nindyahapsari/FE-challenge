import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

type ProgressButtonsProps = {
  currentStep: number;
  totalSteps: number;
  nextStep: () => void;
  prevStep: () => void;
};

function ProgressButtons({
  currentStep,
  totalSteps,
  nextStep,
  prevStep,
}: ProgressButtonsProps) {
  return (
    <div className="flex-1 flex flex-row items-center p-4 justify-between">
      <button
        className={` my-3 rounded-full border-2 p-3 transform transition-transform duration-500 hover:scale-105 ${
          currentStep === 1 ? "border-gray-500" : ""
        }`}
        disabled={currentStep === 1}
        onClick={prevStep}
      >
        <ChevronLeftIcon
          className={`h-3 w-3 ${currentStep === 1 ? "text-gray-500" : ""}`}
        />
      </button>
      <div className="flex flex-row items-center justify-center mx-5 w-32 h-10 bg-gray-500 bg-opacity-30 rounded-full">
        <CheckCircleIcon
          className={`h-5 w-5 mr-1 ${
            currentStep === totalSteps ? "text-green-300" : ""
          }`}
        />
        <div>
          {currentStep} / {totalSteps}
        </div>
      </div>
      <button
        className={`my-3 rounded-full border-2 p-3 transform transition-transform duration-500 hover:scale-105 ${
          currentStep === totalSteps ? "border-gray-500" : ""
        }`}
        disabled={currentStep === totalSteps}
        onClick={nextStep}
      >
        <ChevronRightIcon
          className={`h-3 w-3 ${
            currentStep === totalSteps ? "text-gray-500" : ""
          }`}
        />
      </button>
    </div>
  );
}

export default ProgressButtons;

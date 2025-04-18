"use client";

import { useState } from "react";
import ScannerStepForm from "./ScannerStepForm";
import BuyStepForm from "./BuyStepForm";

type Step = "scanner" | "buy" | "sell" | "simulation";

export default function StrategyBuilder() {
  const [currentStep, setCurrentStep] = useState<Step>("scanner");
  type Rule = { id: string; condition: string; value: string }; // Example rule type
  const [scannerRules, setScannerRules] = useState<Rule[]>([]);
  const [buyRules, setBuyRules] = useState<Rule[]>([]);

  const handleNextStep = () => {
    if (currentStep === "scanner") setCurrentStep("buy");
    else if (currentStep === "buy") setCurrentStep("sell");
    else if (currentStep === "sell") setCurrentStep("simulation");
  };

  const handlePrevStep = () => {
    if (currentStep === "buy") setCurrentStep("scanner");
    else if (currentStep === "sell") setCurrentStep("buy");
    else if (currentStep === "simulation") setCurrentStep("sell");
  };

  const handleSaveStrategy = () => {
    console.log("Strategy saved");
    alert("Strategy saved successfully!");
  };

  const OptionsStyle = "flex-1 text-center py-2 cursor-pointer";

  return (
    <div>
      {/* Step indicator */}
      <div className="flex mb-8">
        <div
          className={`${OptionsStyle} ${
            currentStep === "scanner"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
          onClick={() => setCurrentStep("scanner")}
        >
          1. Scanner Step
        </div>
        <div
          className={`${OptionsStyle} ${
            currentStep === "buy"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
          onClick={() => setCurrentStep("buy")}
        >
          2. Buy Step
        </div>
        <div
          className={`${OptionsStyle} ${
            currentStep === "sell"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          3. Sell Step
        </div>
        <div
          className={`${OptionsStyle} ${
            currentStep === "simulation"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          4. Simulation
        </div>
      </div>

      {/* Step content */}
      <div className="card">
        {currentStep === "scanner" && (
          <ScannerStepForm rules={scannerRules} setRules={setScannerRules} />
        )}
        {currentStep === "buy" && (
          <BuyStepForm rules={buyRules} setRules={setBuyRules} />
        )}
        {currentStep === "sell" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Sell Step</h2>
            <p className="text-gray-400 mb-4">
              Configure when to sell instruments
            </p>
            <div className="card bg-gray-50">
              <p>Not implemented in this demo</p>
            </div>
          </div>
        )}
        {currentStep === "simulation" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Simulation Step</h2>
            <p className="text-gray-400 mb-4">
              Configure simulation parameters
            </p>
            <div className="card bg-gray-50">
              <p>Not implemented in this demo</p>
            </div>
          </div>
        )}

        {/* Footer Navigation buttons */}
        <div className="flex justify-between mt-6">
          {currentStep !== "scanner" && (
            <button onClick={handlePrevStep} className="btn-secondary">
              Previous
            </button>
          )}
          <div className="ml-auto">
            <button onClick={handleSaveStrategy} className="btn-secondary mr-2">
              Save Draft
            </button>
            {currentStep !== "simulation" ? (
              <button onClick={handleNextStep} className="btn-primary">
                Next Step
              </button>
            ) : (
              <button onClick={handleSaveStrategy} className="btn-primary">
                Finish & Simulate
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

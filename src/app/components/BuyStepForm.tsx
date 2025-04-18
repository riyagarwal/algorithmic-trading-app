/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import RuleBuilder from "./RuleBuilder";

interface BuyStepFormProps {
  rules: any[];
  setRules: React.Dispatch<React.SetStateAction<any[]>>;
}

export default function BuyStepForm({ rules, setRules }: BuyStepFormProps) {
  const addRule = (rule: any) => {
    setRules([...rules, rule]);
  };

  const removeRule = (index: number) => {
    const newRules = [...rules];
    newRules.splice(index, 1);
    setRules(newRules);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Buy Step</h2>
      <p className="text-gray-400 mb-4">
        Define criteria for when to buy instruments that have passed the scanner
        step
      </p>

      <div className="border-t border-gray-200 pt-4 mb-4">
        <h3 className="text-lg font-medium mb-2">Buy Rules</h3>
        {rules.length === 0 ? (
          <p className="text-gray-400">
            No buy rules added yet. Use the rule builder below to add rules.
          </p>
        ) : (
          <div className="space-y-2">
            {rules.map((rule, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-700 p-3 rounded"
              >
                <div className="flex-1">
                  <span>
                    {rule.indicator} {rule.operator} {rule.value}
                  </span>
                  {rule.unit && <span> {rule.unit}</span>}
                </div>
                <button
                  onClick={() => removeRule(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <RuleBuilder
        onAddRule={addRule}
        indicatorOptions={[
          { value: "last_price", label: "Last Price" },
          { value: "last_close", label: "Last Close" },
          { value: "day_high", label: "Day High" },
          { value: "day_low", label: "Day Low" },
          { value: "moving_avg_30", label: "30-Day Moving Average" },
        ]}
      />
    </div>
  );
}

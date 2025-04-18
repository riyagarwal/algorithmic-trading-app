/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import RuleBuilder from "./RuleBuilder";

interface ScannerStepFormProps {
  rules: any[];
  setRules: React.Dispatch<React.SetStateAction<any[]>>;
}

export default function ScannerStepForm({
  rules,
  setRules,
}: ScannerStepFormProps) {
  const [exchange, setExchange] = useState("NSE");
  const [instrumentType, setInstrumentType] = useState("EQUITY");

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
      <h2 className="text-xl font-semibold mb-4">Scanner Step</h2>
      <p className="text-gray-400 mb-4">
        Define criteria to identify financial instruments that meet your
        requirements
      </p>

      {/* 1st part of scanner step */}
      <div className="grid grid-cols-2 mb-6">
        {/* Set Exchange */}
        <div className="mr-6">
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Exchange
          </label>
          <select
            className="input bg-gray-700"
            value={exchange}
            onChange={(e) => setExchange(e.target.value)}
          >
            <option value="NSE">NSE</option>
            <option value="BSE">BSE</option>
          </select>
        </div>

        {/* Set Instrument */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Instrument Type
          </label>
          <select
            className="input bg-gray-700"
            value={instrumentType}
            onChange={(e) => setInstrumentType(e.target.value)}
          >
            <option value="EQUITY">EQUITY</option>
            <option value="FUTURES">FUTURES</option>
            <option value="OPTIONS">OPTIONS</option>
            <option value="CURRENCY">CURRENCY</option>
          </select>
        </div>
      </div>

      {/* Additional rules part */}
      <div className="border-t border-gray-200 pt-4 mb-4">
        <h3 className="text-lg font-medium mb-2">Additional Rules</h3>
        {rules.length === 0 ? (
          <p className="text-gray-400">
            No rules added yet. Use the rule builder below to add rules.
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
                  {rule.unit && <span>{rule.unit}</span>}
                </div>
                <button
                  onClick={() => removeRule(index)}
                  className="cursor-pointer text-red-500 hover:text-red-700 "
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
          { value: "price_growth", label: "Price Growth" },
          { value: "price", label: "Price" },
          { value: "market_cap_rank", label: "Market Cap Rank" },
          {
            value: "avg_daily_value",
            label: "Average Daily Transaction Value",
          },
        ]}
      />
    </div>
  );
}

'use client';

import { useState } from 'react';

interface IndicatorOption {
  value: string;
  label: string;
}

interface RuleBuilderProps {
  onAddRule: (rule: { indicator: string; operator: string; value: string; timeframe: string; unit: string }) => void;
indicatorOptions: IndicatorOption[];
}

export default function RuleBuilder({ onAddRule, indicatorOptions }: RuleBuilderProps) {
  const [indicator, setIndicator] = useState(indicatorOptions[0].value);
  const [operator, setOperator] = useState('greater_than');
  const [value, setValue] = useState('');
  const [timeframe, setTimeframe] = useState('30');
  const [unit, setUnit] = useState('%');

  const handleAddRule = () => {
    if (!value) {
      alert('Please enter a value');
      return;
    }

    onAddRule({
      indicator,
      operator,
      value,
      timeframe,
      unit,
    });

    // Reset form
    setValue('');
  };

  return (
    <div className="bg-gray-700 p-4 rounded">
      <h3 className="text-md font-medium">Add Rule</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Indicator
          </label>
          <select 
            className="input mb-0 bg-gray-700"
            value={indicator}
            onChange={(e) => setIndicator(e.target.value)}
          >
            {indicatorOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        {indicator.includes('price') || indicator.includes('avg') ? (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Timeframe (days)
            </label>
            <select 
              className="input mb-0 bg-gray-700"
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
            >
              <option value="5">5 days</option>
              <option value="10">10 days</option>
              <option value="30">30 days</option>
              <option value="90">90 days</option>
              <option value="180">180 days</option>
              <option value="300">300 days</option>
            </select>
          </div>
        ) : null}
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        {/* Select operator */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Operator
          </label>
          <select 
            className="input mb-0 bg-gray-700"
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
          >
            <option value="greater_than">greater than</option>
            <option value="less_than">less than</option>
            <option value="equal_to">equal to</option>
            <option value="greater_than_equal">greater than or equal</option>
            <option value="less_than_equal">less than or equal</option>
          </select>
        </div>

        {/* Select value */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Value
          </label>
          <input 
            type="text" 
            className="input mb-0"
            value={value}
            onChange={(e) => setValue(e.target.value)} 
          />
        </div>

        {/* Select unit */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Unit
          </label>
          <select 
            className="input mb-0 bg-gray-700"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          >
            <option value="%">%</option>
            <option value="₹">₹</option>
            <option value="">No unit</option>
          </select>
        </div>
      </div>
      
      <button 
        onClick={handleAddRule}
        className="btn-primary"
      >
        Add Rule
      </button>
    </div>
  );
}

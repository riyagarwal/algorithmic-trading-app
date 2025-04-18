"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import StrategyBuilder from "../components/StrategyBuilder";

export default function CreateStrategy() {
  const [strategyName, setStrategyName] = useState("");

  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Create a Strategy</h1>
          <div className="card mb-6">
            <label
              htmlFor="strategyName"
              className="block text-sm font-medium mb-1"
            >
              Strategy Name
            </label>
            <input
              type="text"
              id="strategyName"
              className="input"
              placeholder="Enter strategy name"
              value={strategyName}
              onChange={(e) => setStrategyName(e.target.value)}
            />
          </div>

          <StrategyBuilder />
        </div>
      </div>
    </main>
  );
}

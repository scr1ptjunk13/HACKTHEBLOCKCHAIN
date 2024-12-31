"use client"

import React, { useState } from "react";
import { Play, CheckCircle, AlertCircle, RefreshCcw, ChevronRight } from "lucide-react";

export default function DEXChallenge() {
  const [code, setCode] = useState(`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Exploit {
    // Write your exploit here
    // Hint: Use AAVE for flash loan
}`);
  const [testResults, setTestResults] = useState([]);
  const [currentBalance, setCurrentBalance] = useState("0");
  const [showDEXCode, setShowDEXCode] = useState(false);

  const toggleDEXCode = () => setShowDEXCode(!showDEXCode);

  return (
    <div className="flex flex-col h-screen gap-4 p-4">
      {/* Challenge Header */}
      <div className="bg-gray-900 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Flash Loan DEX Attack</h2>
        <div className="flex items-center gap-4 mb-4">
          <span className="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">Hard</span>
          <span className="text-sm text-gray-400">Reward: 1000 XP</span>
        </div>
        <p className="text-gray-300 mb-4">
          Exploit the vulnerable DEX by using a flash loan to manipulate the price oracle and make a profit.
        </p>
      </div>

      {/* Challenge Environment */}
      <div className="grid grid-cols-2 gap-4 flex-grow">
        {/* Left Panel: Code Editor */}
        <div className="flex flex-col bg-gray-900 rounded-lg">
          <div className="border-b border-gray-800 p-3 flex justify-between items-center">
            <div className="flex gap-2">
              <button className="bg-green-600 hover:bg-green-700 px-4 py-1.5 rounded-md text-sm flex items-center gap-2">
                <Play size={14} /> Run Exploit
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 px-4 py-1.5 rounded-md text-sm flex items-center gap-2">
                <RefreshCcw size={14} /> Reset
              </button>
            </div>
            <div className="text-sm text-gray-400">
              Current Balance: {currentBalance} ETH
            </div>
          </div>
          <div className="flex-grow p-4">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-full bg-gray-950 text-gray-300 font-mono text-sm p-4 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              spellCheck="false"
            />
          </div>
        </div>

        {/* Right Panel: Environment State */}
        <div className="flex flex-col bg-gray-900 rounded-lg">
          <div className="border-b border-gray-800 p-3 flex justify-between items-center">
            <h3 className="font-semibold">Environment State</h3>
            <button
              className="text-sm bg-blue-600 px-4 py-1.5 rounded-md hover:bg-blue-700"
              onClick={toggleDEXCode}
            >
              {showDEXCode ? "Hide DEX Code" : "Show DEX Code"}
            </button>
          </div>
          {showDEXCode && (
            <div className="p-4 bg-gray-800 rounded-lg text-sm font-mono text-gray-300">
              <pre>
                {`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VulnerableDEX {
    mapping(address => uint256) public balances;
    uint256 public constant PRICE = 1000; // 1 ETH = 1000 USDC
    
    function getPrice() public view returns (uint256) {
        return PRICE;
    }
    
    function swap(bool ethToUsdc) external payable {
        if (ethToUsdc) {
            uint256 usdcToReceive = msg.value * getPrice();
            require(balances[address(this)] >= usdcToReceive, "Insufficient liquidity");
            balances[msg.sender] += usdcToReceive;
            balances[address(this)] -= usdcToReceive;
        } else {
            // Implementation for USDC to ETH swap
        }
    }
}`}
              </pre>
            </div>
          )}

          <div className="p-4 space-y-4">
            {/* DEX State */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-sm font-semibold mb-2">DEX Liquidity Pools</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700 p-3 rounded-lg">
                  <div className="text-sm text-gray-400">ETH-USDC</div>
                  <div className="text-lg">$2M TVL</div>
                </div>
                <div className="bg-gray-700 p-3 rounded-lg">
                  <div className="text-sm text-gray-400">Price Oracle</div>
                  <div className="text-lg">1 ETH = $2,000</div>
                </div>
              </div>
            </div>

            {/* Test Cases */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Verification Steps</h4>
              {[
                "Flash loan taken successfully",
                "Price manipulation executed",
                "Profit generated",
                "Loan repaid in same transaction",
              ].map((test, i) => (
                <div key={i} className="flex items-center gap-2 text-sm py-2">
                  {testResults[i] ? (
                    <CheckCircle size={16} className="text-green-500" />
                  ) : (
                    <ChevronRight size={16} className="text-gray-500" />
                  )}
                  {test}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Console Output */}
      <div className="bg-gray-900 p-4 rounded-lg h-48 overflow-y-auto">
        <div className="flex items-center gap-2 mb-2">
          <AlertCircle size={14} className="text-gray-400" />
          <h3 className="text-sm font-semibold">Transaction Log</h3>
        </div>
        <pre className="text-sm text-gray-300 font-mono">
          {`> Initializing environment...
> DEX deployed at: 0x123...
> Your balance: 0.1 ETH`}
        </pre>
      </div>
    </div>
  );
}

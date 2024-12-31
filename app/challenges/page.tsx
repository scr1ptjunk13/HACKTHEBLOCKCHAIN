"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertCircle, CheckCircle2, Code2, FileCode2, PlayCircle, Terminal, Wallet } from 'lucide-react'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

export default function BankHeistChallenge() {
  const [bankBalance, setBankBalance] = useState(10)
  const [isCompleted, setIsCompleted] = useState(false)
  
  return (
    <div className="h-screen w-screen overflow-hidden">
      {/* Challenge Header */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Bank Heist: Reentrancy Challenge</h1>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-yellow-400 border-yellow-400">
                Medium Difficulty
              </Badge>
              <Badge variant="outline" className="text-green-400 border-green-400">
                10 ETH Reward
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Update ResizablePanelGroup to take full width */}
      <ResizablePanelGroup 
        direction="horizontal" 
        className="h-[calc(100vh-80px)] w-full"
      >
        {/* Left Panel */}
        <ResizablePanel defaultSize={25} minSize={20}>
          <div className="h-full bg-gray-900 p-6">
            <h2 className="text-xl font-bold mb-4">Challenge Overview</h2>
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Bank Balance</span>
                    <span className="text-green-400">{bankBalance} ETH</span>
                  </div>
                  <Progress value={bankBalance * 10} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium text-green-400">Objectives:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-gray-500" />
                      <span>Identify the reentrancy vulnerability</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-gray-500" />
                      <span>Create an exploit contract</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-gray-500" />
                      <span>Drain the bank&apos;s funds</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-gray-500" />
                      <span>Pass the verification check</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <div className="text-sm text-yellow-500">
                      <p className="font-medium">Hint:</p>
                      <p>Look carefully at the order of operations in the withdraw function. 
                      Remember the check-effects-interaction pattern.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ResizablePanel>

        <ResizableHandle />

        {/* Right Panel */}
        <ResizablePanel defaultSize={75}>
          <div className="h-full bg-gray-900">
            <Tabs defaultValue="vulnerable" className="w-full h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <TabsList className="bg-gray-800">
                    <TabsTrigger value="vulnerable" className="gap-2">
                      <FileCode2 className="h-4 w-4" />
                      Vulnerable Contract
                    </TabsTrigger>
                    <TabsTrigger value="exploit" className="gap-2">
                      <Code2 className="h-4 w-4" />
                      Exploit Contract
                    </TabsTrigger>
                    <TabsTrigger value="terminal" className="gap-2">
                      <Terminal className="h-4 w-4" />
                      Terminal
                    </TabsTrigger>
                  </TabsList>
                  <Button variant="outline" className="gap-2">
                    <PlayCircle className="h-4 w-4" />
                    Run Exploit
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <TabsContent value="vulnerable">
                  <pre className="p-4 rounded-lg bg-gray-800 overflow-auto text-sm">
                    <code className="text-gray-300">{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VulnerableBank {
    mapping(address => uint256) public balances;
    
    function withdraw(uint256 amount) external {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        
        // Vulnerable: State change after external call
        (bool success, ) = msg.sender.call{value: amount}("");
        require(success, "Transfer failed");
        
        balances[msg.sender] -= amount;
    }
    
    // ... rest of the contract
}`}</code>
                  </pre>
                </TabsContent>
                <TabsContent value="exploit">
                  <div className="p-4 rounded-lg bg-gray-800">
                    <textarea 
                      className="w-full h-[400px] bg-transparent text-gray-300 font-mono text-sm resize-none focus:outline-none" 
                      placeholder="// Write your exploit contract here..."
                    />
                  </div>
                </TabsContent>
                <TabsContent value="terminal">
                  <div className="p-4 rounded-lg bg-gray-800 h-[400px] font-mono text-sm text-gray-300">
                    <div className="space-y-1">
                      <p className="text-green-400">$ Compiling contract...</p>
                      <p>No errors found</p>
                      <p className="text-yellow-400">Ready to deploy</p>
                      <p className="text-gray-500">// Execute your exploit when ready</p>
                    </div>
                  </div>
                </TabsContent>
              </CardContent>
            </Tabs>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}


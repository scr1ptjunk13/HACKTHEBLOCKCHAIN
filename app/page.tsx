"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Home() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-bold mb-8 text-center">
        Capture the <span className="text-green-500">Blockchain</span>
      </h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Learn blockchain security by hacking intentionally vulnerable smart contracts. 
        Connect your wallet, face challenges, and climb the leaderboard!
      </p>
      <div className="flex space-x-4">
        <Button onClick={() => router.push('/sign-up')}>
          Start Hacking
        </Button>
        <Button variant="outline">Learn More</Button>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard 
          title="Smart Contract Playground" 
          description="Practice hacking in a risk-free environment using test networks."
        />
        <FeatureCard 
          title="Progressive Difficulty" 
          description="Start with beginner exploits and work your way up to advanced attacks."
        />
        <FeatureCard 
          title="Earn Rewards" 
          description="Capture contracts to earn NFT badges and climb the leaderboard."
        />
      </div>
    </div>
  )
}

function FeatureCard({ title, description }: { title: string, description: string }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h3 className="text-lg font-medium text-green-500 mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}


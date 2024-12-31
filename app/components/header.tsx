import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-gray-900 py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-500">CTB</Link>
        <div className="space-x-4">
          <Link href="/challenges" className="text-gray-300 hover:text-white">Challenges</Link>
          <Link href="/leaderboard" className="text-gray-300 hover:text-white">Leaderboard</Link>
          <Link href="/profile" className="text-gray-300 hover:text-white">Profile</Link>
          <Button variant="outline" className="text-green-500 border-green-500 hover:bg-green-500 hover:text-white">
            Connect Wallet
          </Button>
        </div>
      </nav>
    </header>
  )
}


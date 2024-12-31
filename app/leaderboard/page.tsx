import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function Leaderboard() {
  const leaderboardData = [
    { rank: 1, username: "0xHacker", score: 1500, badges: 5 },
    { rank: 2, username: "BlockchainWizard", score: 1350, badges: 4 },
    { rank: 3, username: "SmartContractNinja", score: 1200, badges: 3 },
    { rank: 4, username: "CryptoExplorer", score: 1100, badges: 3 },
    { rank: 5, username: "Web3Enthusiast", score: 1000, badges: 2 },
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Leaderboard</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Rank</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Score</TableHead>
            <TableHead className="text-right">Badges</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leaderboardData.map((entry) => (
            <TableRow key={entry.rank}>
              <TableCell className="font-medium">{entry.rank}</TableCell>
              <TableCell>{entry.username}</TableCell>
              <TableCell>{entry.score}</TableCell>
              <TableCell className="text-right">
                <Badge variant="outline" className="ml-2">
                  {entry.badges} 🏆
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}


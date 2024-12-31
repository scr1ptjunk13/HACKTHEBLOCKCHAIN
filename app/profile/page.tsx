import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Profile() {
  const user = {
    username: "0xHacker",
    walletAddress: "0x1234...5678",
    score: 1500,
    rank: 1,
    challengesSolved: 15,
    badges: [
      { id: 1, name: "Reentrancy Master", description: "Solved 5 reentrancy challenges" },
      { id: 2, name: "Overflow Conqueror", description: "Solved 3 integer overflow challenges" },
      { id: 3, name: "Flash Loan Wizard", description: "Executed a complex flash loan attack" },
    ]
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-green-500">{user.username}</CardTitle>
            <CardDescription>{user.walletAddress}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xl mb-2">Score: {user.score}</p>
            <p className="text-xl mb-2">Rank: #{user.rank}</p>
            <p className="text-xl">Challenges Solved: {user.challengesSolved}</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-green-500">Badges</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {user.badges.map((badge) => (
                <li key={badge.id}>
                  <Badge variant="outline" className="mr-2">
                    {badge.name}
                  </Badge>
                  <span className="text-sm text-gray-300">{badge.description}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


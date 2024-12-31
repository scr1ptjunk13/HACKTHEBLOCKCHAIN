"use client"

export default function BankHeistChallenge() {
  return (
    <main className="min-h-screen bg-[#141d2b]">
      <div id="room-banner" className="relative p-8 text-white">
        {/* Icon and Title Section */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12">
            <svg viewBox="0 0 24 24" className="text-red-500">
              <path fill="currentColor" d="M19 3L13 9L15 11L22 4V3M12 12.5A0.5 0.5 0 0 1 11.5 12A0.5 0.5 0 0 1 12 11.5A0.5 0.5 0 0 1 12.5 12A0.5 0.5 0 0 1 12 12.5M6 20A2 2 0 0 1 4 18C4 16.89 4.9 16 6 16A2 2 0 0 1 8 18C8 19.11 7.1 20 6 20M6 8A2 2 0 0 1 4 6C4 4.89 4.9 4 6 4A2 2 0 0 1 8 6C8 7.11 7.1 8 6 8M9.64 7.64C9.87 7.14 10 6.59 10 6A4 4 0 0 0 6 2A4 4 0 0 0 2 6A4 4 0 0 0 6 10C6.59 10 7.14 9.87 7.64 9.64L10 12L7.64 14.36C7.14 14.13 6.59 14 6 14A4 4 0 0 0 2 18A4 4 0 0 0 6 22A4 4 0 0 0 10 18C10 17.41 9.87 16.86 9.64 16.36L12 14L19 21H22V20L9.64 7.64Z" />
            </svg>
            
          </div>
          <div>
            <h1 className="text-2xl font-bold">Offensive Security Intro</h1>
            <p className="text-gray-400 mt-2">
              Hack your first website (legally in a safe environment) and experience an ethical hacker's job.
            </p>
          </div>
        </div>

        {/* Difficulty and Time */}
        <div className="flex items-center gap-4 mt-4">
          <span className="text-green-500 flex items-center gap-1">
            <span className="text-sm">Easy</span>
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
            </svg>
            <span className="text-sm">15 min</span>
          </span>
        </div>
      </div>
    </main>
  )
}


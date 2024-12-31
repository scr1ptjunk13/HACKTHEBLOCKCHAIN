"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Linkedin } from 'lucide-react'
import Link from "next/link"

interface SignUpModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  const [email, setEmail] = useState("")

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gray-900 border-gray-800">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-2xl text-center font-bold">
            Create a CTB Account
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
            />
          </div>
          <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
            Sign up
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-gray-900 px-2 text-gray-400">or continue with</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="bg-gray-800 border-gray-700 hover:bg-gray-700">
              <Github className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline" className="bg-gray-800 border-gray-700 hover:bg-gray-700">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </div>
          <div className="text-center text-sm text-gray-400">
            Already have a CTB account?{" "}
            <Link href="/sign-in" className="text-green-500 hover:text-green-400">
              Sign In
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-gray-400">
          <p>Copyright © 2024 Capture the Blockchain</p>
          <div className="mt-1 space-x-2">
            <Link href="/terms" className="hover:text-green-500">Terms</Link>
            <span>·</span>
            <Link href="/privacy" className="hover:text-green-500">Privacy</Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}


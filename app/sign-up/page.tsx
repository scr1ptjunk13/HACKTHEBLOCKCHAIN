"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowRight } from 'lucide-react'

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    fullName: "",
    country: "",
    birthMonth: "",
    birthDay: "",
    birthYear: "",
  })

  const countries = [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "India",
    "Japan",
    // Add more countries as needed
  ]

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a1016] text-gray-300 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-white">Create a CTB account</h1>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="flex gap-2">
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-[#1a1f2e] border-gray-800"
              />
              <Button variant="outline" size="icon" className="bg-[#1a1f2e] border-gray-800">
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="bg-[#1a1f2e] border-gray-800"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fullName">Full name</Label>
            <Input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="bg-[#1a1f2e] border-gray-800"
            />
          </div>

          <div className="space-y-2">
            <Label>Country</Label>
            <Select
              value={formData.country}
              onValueChange={(value) => setFormData({ ...formData, country: value })}
            >
              <SelectTrigger className="bg-[#1a1f2e] border-gray-800">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1f2e] border-gray-800">
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Date of birth</Label>
            <div className="grid grid-cols-3 gap-2">
              <Select
                value={formData.birthMonth}
                onValueChange={(value) => setFormData({ ...formData, birthMonth: value })}
              >
                <SelectTrigger className="bg-[#1a1f2e] border-gray-800">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1f2e] border-gray-800">
                  {months.map((month) => (
                    <SelectItem key={month} value={month}>
                      {month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={formData.birthDay}
                onValueChange={(value) => setFormData({ ...formData, birthDay: value })}
              >
                <SelectTrigger className="bg-[#1a1f2e] border-gray-800">
                  <SelectValue placeholder="Day" />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1f2e] border-gray-800">
                  {Array.from({ length: 31 }, (_, i) => (
                    <SelectItem key={i + 1} value={(i + 1).toString()}>
                      {i + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={formData.birthYear}
                onValueChange={(value) => setFormData({ ...formData, birthYear: value })}
              >
                <SelectTrigger className="bg-[#1a1f2e] border-gray-800">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1f2e] border-gray-800">
                  {Array.from({ length: 100 }, (_, i) => {
                    const year = new Date().getFullYear() - i
                    return (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" className="border-gray-600" />
              <label
                htmlFor="terms"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I accept the{" "}
                <Link href="/terms" className="text-green-500 hover:underline">
                  User Agreement
                </Link>{" "}
                and the{" "}
                <Link href="/privacy" className="text-green-500 hover:underline">
                  Privacy Notice
                </Link>
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="updates" className="border-gray-600" />
              <label
                htmlFor="updates"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I wish to receive e-mails regarding product updates
              </label>
            </div>
          </div>

          <Button className="w-full bg-green-500 hover:bg-green-600">
            Create account
          </Button>
        </form>

        <div className="text-center text-sm">
          <span className="text-gray-500">Made a mistake?</span>{" "}
          <Link href="/sign-up" className="text-green-500 hover:underline inline-flex items-center">
            Start over <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="text-center text-xs text-gray-500">
          <p>Copyright © 2024 Capture the Blockchain</p>
          <div className="mt-1 space-x-2">
            <Link href="/terms" className="hover:text-green-500">User Agreement</Link>
            <span>·</span>
            <Link href="/privacy" className="hover:text-green-500">Privacy Notice</Link>
          </div>
        </div>
      </div>
    </div>
  )
}


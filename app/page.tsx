"use client"

import { useState } from "react"
import PasswordProtection from "@/components/password-protection"
import BirthdayPage from "@/components/birthday-page"

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  if (!isAuthenticated) {
    return <PasswordProtection onSuccess={() => setIsAuthenticated(true)} />
  }

  return <BirthdayPage />
}

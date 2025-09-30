"use client"

import { LoginForm } from "@/components/login-form"
import { GraduationCap } from "lucide-react"
import Link from "next/link"

export default function PortalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border bg-background">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">UPTMA</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 bg-secondary">
        <LoginForm />
      </main>
    </div>
  )
}

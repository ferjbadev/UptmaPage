"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">UPTMA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#programas"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Programas
            </Link>
            <Link href="#nosotros" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Nosotros
            </Link>
            <Link href="#campus" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Campus
            </Link>
            <Link
              href="#testimonios"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Testimonios
            </Link>
            <Link href="#contacto" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contacto
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button asChild variant="default" className="hidden md:inline-flex">
              <Link href="/portal">Portal Estudiantes</Link>
            </Button>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4">
            <Link
              href="#programas"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Programas
            </Link>
            <Link
              href="#nosotros"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              href="#campus"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Campus
            </Link>
            <Link
              href="#testimonios"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonios
            </Link>
            <Link
              href="#contacto"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </Link>
            <Button asChild variant="default" className="w-full">
              <Link href="/portal">Portal Estudiantes</Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}

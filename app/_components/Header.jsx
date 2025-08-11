"use client"

import { Button } from "@/components/ui/button"
import { APP_NAME } from "@/lib/constants"
import { SignInButton, UserButton, useUser } from "@clerk/nextjs"
import { ChevronRight, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"

function Header() {
  const { isSignedIn } = useUser()
  const path = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // Close menu on route change
    setMenuOpen(false)
  }, [path])

  if (path.includes("aiform")) return null

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ]

  

  return (
    <>
      {/* Accessibility skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 text-black px-3 py-1 rounded"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-50 w-full bg-transparent" role="banner">
        <div className="neomorphic-nav mx-4 mt-4 rounded-2xl px-6 py-3">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="neomorphic-small p-2 rounded-xl flex items-center justify-center">
                <h1 className="text-2xl font-bold text-neomorphic-primary">{APP_NAME}</h1>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden md:flex items-center gap-8"
              role="navigation"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-neomorphic-primary transition-colors font-medium px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-neomorphic-primary/20"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              {isSignedIn ? (
                <>
                  <Link href="/dashboard">
                    <Button className="rounded-2xl neomorphic-btn-primary text-white">
                      Dashboard <ChevronRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <div className="neomorphic-small p-2 rounded-xl">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </>
              ) : (
                <>
                  <SignInButton mode="modal">
                    <button className="neomorphic-btn">Sign In</button>
                  </SignInButton>
                  <SignInButton mode="modal">
                    <button className="neomorphic-btn-primary">
                      Get Started
                    </button>
                  </SignInButton>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden neomorphic-small p-3 rounded-xl flex items-center justify-center"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {menuOpen && (
          <div className="md:hidden mt-2 mx-4 rounded-2xl neomorphic-nav px-6 py-4 space-y-4 animate-fade-in">
            <nav
              role="navigation"
              aria-label="Mobile navigation"
              className="flex flex-col gap-4"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-neomorphic-primary transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
              {isSignedIn ? (
                <>
                  <Link href="/dashboard">
                    <Button className="w-full rounded-2xl neomorphic-btn-primary text-white">
                      Dashboard
                    </Button>
                  </Link>
                  <div className="neomorphic-small p-2 rounded-xl inline-block">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </>
              ) : (
                <>
                  <SignInButton mode="modal">
                    <button className="neomorphic-btn w-full">Sign In</button>
                  </SignInButton>
                  <SignInButton mode="modal">
                    <button className="neomorphic-btn-primary w-full">
                      Get Started
                    </button>
                  </SignInButton>
                </>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header

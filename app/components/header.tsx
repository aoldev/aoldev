'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useAuth } from '../hooks/useAuth'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
  const { session, logout } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    } else {
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
      if (href) {
        window.location.href = `/${href}`

        setTimeout(() => {
          const hash = href.split('#')[1]
          if (hash) {
            const element = document.querySelector(`#${targetId}`)
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }
        }, 500)
      }
    }
  }

  return (
    <section id="header">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-md">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center font-normal">

          <Link
            href="#HeroSection"
            onClick={(e) => handleScroll(e, '#HeroSection')}
            className="text-2xl font-bold text-primary"
          >
            AI Chatbot
          </Link>


          <div className="hidden md:flex space-x-6 items-center">
            <Link
              href="#features"
              onClick={(e) => handleScroll(e, '#features')}
              className="text-black-600 hover:text-primary transition-colors hover:scale-105"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              onClick={(e) => handleScroll(e, '#pricing')}
              className="text-black-600 hover:text-primary transition-colors hover:scale-105"
            >
              Pricing
            </Link>
            <Link
              href="/careers"
              className="text-gray-600 hover:text-primary transition-colors hover:scale-105"
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-primary transition-colors hover:scale-105"
            >
              Contact Us
            </Link>
            {session ? (
              <>
                <span className="text-black-600">Welcome, {session.user?.email}</span>
                <Button
                  onClick={logout}
                  variant="outline"
                  className="transition-transform transform hover:scale-105 hover:bg-gray-200 hover:border-gray-400"
                >
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button
                    variant="outline"
                    className="transition-transform transform hover:scale-105 hover:bg-gray-200 hover:border-gray-400"
                  >
                    Log In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="transition-transform transform hover:scale-105 hover:bg-primary hover:text-white">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>


          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-primary text-2xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
            <div className="flex flex-col items-center space-y-4 py-4 font-bold">
              <Link
                href="#features"
                onClick={(e) => {
                  handleScroll(e, '#features')
                  setMenuOpen(false)
                }}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                onClick={(e) => {
                  handleScroll(e, '#pricing')
                  setMenuOpen(false)
                }}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/careers"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
              {session ? (
                <>
                  <span className="text-gray-600">Welcome, {session.user?.email}</span>
                  <Button
                    onClick={() => {
                      logout()
                      setMenuOpen(false)
                    }}
                    variant="outline"
                    className="hover:bg-gray-200 hover:border-gray-400 font-bold"
                  >
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <Button
                      variant="outline"
                      className="hover:bg-gray-200 hover:border-gray-400 font-bold"
                      onClick={() => setMenuOpen(false)}
                    >
                      Log In
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button
                      className="hover:bg-primary hover:text-white font-bold"
                      onClick={() => setMenuOpen(false)}
                    >
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </header>
    </section>
  )
}

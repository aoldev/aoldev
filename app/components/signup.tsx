'use client'

import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { signIn } from "next-auth/react"
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false) // State for password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false) // State for confirm password visibility
  const [error, setError] = useState<string>('')

  const { signup } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (password.length < 8) {
      setError('Password must be at least 8 characters long.')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }
    const success = await signup(email, password)
    if (!success) {
      setError('Failed to create account')
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative font-bold">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pr-10" // Space for the button
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600 hover:text-gray-900"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="relative font-bold">
              <Input
                id="confirm-password"
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="pr-10" // Space for the button
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600 hover:text-gray-900"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex flex-col space-y-2 font-bold">
            <Button onClick={() => signIn('google')} type="button" className="w-full flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-md">
              <FaGoogle className="mr-2" /> Sign up with Google
            </Button>
            <Button onClick={() => signIn('github')} type="button" className="w-full flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 rounded-md">
              <FaGithub className="mr-2" /> Sign up with GitHub
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full font-bold">
            Sign Up
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

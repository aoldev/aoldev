import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

// This would typically be stored in a database
const users = new Map()

export async function POST(req: Request) {
  const { email, password } = await req.json()

  if (users.has(email)) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 })
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  users.set(email, hashedPassword)

  return NextResponse.json({ message: 'User created successfully' })
}


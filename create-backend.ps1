# Create main directory structure
New-Item -ItemType Directory -Path "packages/backend/src/config" -Force
New-Item -ItemType Directory -Path "packages/backend/src/types" -Force
New-Item -ItemType Directory -Path "packages/backend/src/services" -Force
New-Item -ItemType Directory -Path "packages/backend/src/utils" -Force

# Create files in config directory
$supabaseContent = @'
import { createClient } from '@supabase/supabase-js'
import { Database } from '../types/database'

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL')
}
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)
'@
Set-Content -Path "packages/backend/src/config/supabase.ts" -Value $supabaseContent

# Create files in types directory
$authContent = @'
export interface User {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  role: "admin" | "user"
  created_at: string
}
'@
Set-Content -Path "packages/backend/src/types/auth.ts" -Value $authContent

$blogContent = @'
export interface Post {
  id: string
  title: string
  content: string
  author_id: string
  published: boolean
  created_at: string
  updated_at: string
  category: "personal" | "educational"
  tags?: string[]
}
'@
Set-Content -Path "packages/backend/src/types/blog.ts" -Value $blogContent

$bookingContent = @'
export interface Booking {
  id: string
  user_id: string
  service_id: string
  date: string
  time: string
  status: "pending" | "confirmed" | "cancelled"
  created_at: string
}
'@
Set-Content -Path "packages/backend/src/types/booking.ts" -Value $bookingContent

$typesIndexContent = @'
export * from "./auth"
export * from "./blog"
export * from "./booking"
'@
Set-Content -Path "packages/backend/src/types/index.ts" -Value $typesIndexContent

# Create files in services directory
$authServiceContent = @'
import { supabase } from "../config/supabase"
import { User } from "../types/auth"

export const authService = {
  async signUp(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    if (error) throw error
    return data
  },

  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) throw error
    return data
  },

  async signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }
}
'@
Set-Content -Path "packages/backend/src/services/auth.ts" -Value $authServiceContent

$blogServiceContent = @'
import { supabase } from "../config/supabase"
import { Post } from "../types/blog"

export const blogService = {
  async getPosts() {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false })
    
    if (error) throw error
    return data as Post[]
  },

  async createPost(post: Omit<Post, "id" | "created_at" | "updated_at">) {
    const { data, error } = await supabase
      .from("posts")
      .insert(post)
      .select()
      .single()
    
    if (error) throw error
    return data as Post
  }
}
'@
Set-Content -Path "packages/backend/src/services/blog.ts" -Value $blogServiceContent

$bookingServiceContent = @'
import { supabase } from "../config/supabase"
import { Booking } from "../types/booking"

export const bookingService = {
  async createBooking(booking: Omit<Booking, "id" | "created_at">) {
    const { data, error } = await supabase
      .from("bookings")
      .insert(booking)
      .select()
      .single()
    
    if (error) throw error
    return data as Booking
  }
}
'@
Set-Content -Path "packages/backend/src/services/booking.ts" -Value $bookingServiceContent

$servicesIndexContent = @'
export * from "./auth"
export * from "./blog"
export * from "./booking"
'@
Set-Content -Path "packages/backend/src/services/index.ts" -Value $servicesIndexContent

# Create files in utils directory
$errorsContent = @'
export class AppError extends Error {
  constructor(
    message: string,
    public statusCode: number = 400
  ) {
    super(message)
    this.name = "AppError"
  }
}
'@
Set-Content -Path "packages/backend/src/utils/errors.ts" -Value $errorsContent

$validationContent = @'
import { z } from "zod"

export const validateEmail = (email: string) => {
  return z.string().email().parse(email)
}
'@
Set-Content -Path "packages/backend/src/utils/validation.ts" -Value $validationContent

# Create main index.ts
$mainIndexContent = @'
export * from "./services"
export * from "./types"
export { supabase } from "./config/supabase"
'@
Set-Content -Path "packages/backend/src/index.ts" -Value $mainIndexContent

# Create package.json
$packageJsonContent = @'
{
  "name": "@my/backend",
  "version": "0.0.1",
  "private": true,
  "main": "src/index.ts",
  "types": "src/index.ts",
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "lint": "eslint src --ext .ts,.tsx"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.39.3",
    "zod": "^3.22.4"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0"
  }
}
'@
Set-Content -Path "packages/backend/package.json" -Value $packageJsonContent

# Create tsconfig.json
$tsconfigContent = @'
{
  "extends": "../../tsconfig.base",
  "include": ["**/*.ts", "**/*.tsx"],
  "compilerOptions": {
    "composite": true,
    "jsx": "react-jsx",
    "paths": {
      "@my/backend/*": ["./packages/backend/*"]
    }
  },
  "references": []
}
'@
Set-Content -Path "packages/backend/tsconfig.json" -Value $tsconfigContent

Write-Host "Backend package structure created successfully!"
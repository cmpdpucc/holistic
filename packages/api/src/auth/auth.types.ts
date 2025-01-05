// packages/api/src/auth/auth.types.ts
export interface UserProfile {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  created_at: string
}

export interface AuthResponse {
  user: UserProfile | null
  error?: string
}
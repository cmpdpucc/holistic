// packages/api/src/auth/AuthContext.tsx
import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from 'api/utils/supabase'
import { UserProfile } from './auth.types'
import { profileService } from '../profiles/profile.service'

interface AuthContextType {
  user: UserProfile | null
  loading: boolean
}

const AuthContext = createContext<AuthContextType>({ user: null, loading: true })

export function AuthProvider({ children }) {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        const { profile } = await profileService.getProfile(session.user.id)
        setUser(profile || null)
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  return <AuthContext.Provider value={{ user, loading }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

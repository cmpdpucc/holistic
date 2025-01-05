// packages/api/src/auth/auth.service.ts
import { supabase } from 'api/utils/supabase'
import { AuthResponse } from './auth.types'

export const authService = {
  async signInWithGoogle(): Promise<AuthResponse> {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      })
      
      if (error) throw error
      
      return { user: data.user }
    } catch (error) {
      return { user: null, error: error.message }
    }
  },

  async signOut(): Promise<{ error?: string }> {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      return {}
    } catch (error) {
      return { error: error.message }
    }
  }
}
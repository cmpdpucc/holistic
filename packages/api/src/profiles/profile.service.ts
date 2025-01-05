// packages/api/src/profiles/profile.service.ts
import { supabase } from 'api/utils/supabase'
import { UserProfile } from '../auth/auth.types'

export const profileService = {
  async createProfile(userData: {
    id: string
    email: string
    full_name?: string
    avatar_url?: string
  }): Promise<{ error?: string }> {
    try {
      const { error } = await supabase
        .from('profiles')
        .insert([
          {
            id: userData.id,
            email: userData.email,
            full_name: userData.full_name,
            avatar_url: userData.avatar_url
          }
        ])
      
      if (error) throw error
      return {}
    } catch (error) {
      return { error: error.message }
    }
  },

  async getProfile(userId: string): Promise<{ profile?: UserProfile, error?: string }> {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()

      if (error) throw error
      return { profile: data }
    } catch (error) {
      return { error: error.message }
    }
  }
}
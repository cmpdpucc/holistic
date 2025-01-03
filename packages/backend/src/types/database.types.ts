// packages/backend/src/types/database.types.ts
export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          full_name: string | null
          avatar_url: string | null
          bio: string | null
          website: string | null
          email: string
          role: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          website?: string | null
          email: string
          role?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          website?: string | null
          email?: string
          role?: string
          created_at?: string
          updated_at?: string
        }
      }
      posts: {
        Row: {
          id: string
          author_id: string
          title: string
          content: string
          excerpt: string | null
          slug: string
          status: string
          published_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          author_id: string
          title: string
          content: string
          excerpt?: string | null
          slug: string
          status?: string
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          author_id?: string
          title?: string
          content?: string
          excerpt?: string | null
          slug?: string
          status?: string
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
        }
      }
      post_categories: {
        Row: {
          post_id: string
          category_id: string
        }
        Insert: {
          post_id: string
          category_id: string
        }
        Update: {
          post_id?: string
          category_id?: string
        }
      }
      comments: {
        Row: {
          id: string
          post_id: string
          author_id: string
          content: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          post_id: string
          author_id: string
          content: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          post_id?: string
          author_id?: string
          content?: string
          created_at?: string
          updated_at?: string
        }
      }
      services: {
        Row: {
          id: string
          name: string
          description: string | null
          duration: number
          price: number
          is_active: boolean
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          duration: number
          price: number
          is_active?: boolean
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          duration?: number
          price?: number
          is_active?: boolean
        }
      }
      availability: {
        Row: {
          id: string
          coach_id: string
          day_of_week: number
          start_time: string
          end_time: string
        }
        Insert: {
          id?: string
          coach_id: string
          day_of_week: number
          start_time: string
          end_time: string
        }
        Update: {
          id?: string
          coach_id?: string
          day_of_week?: number
          start_time?: string
          end_time?: string
        }
      }
      bookings: {
        Row: {
          id: string
          client_id: string
          service_id: string
          start_time: string
          end_time: string
          status: string
          payment_status: string
          notes: string | null
          created_at: string
        }
        Insert: {
          id?: string
          client_id: string
          service_id: string
          start_time: string
          end_time: string
          status?: string
          payment_status?: string
          notes?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          client_id?: string
          service_id?: string
          start_time?: string
          end_time?: string
          status?: string
          payment_status?: string
          notes?: string | null
          created_at?: string
        }
      }
      newsletter_subscriptions: {
        Row: {
          id: string
          email: string
          is_active: boolean
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          is_active?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          is_active?: boolean
          created_at?: string
        }
      }
    }
  }
}

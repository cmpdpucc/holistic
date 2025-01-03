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

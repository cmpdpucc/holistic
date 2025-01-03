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

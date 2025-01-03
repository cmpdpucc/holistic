export interface Booking {
  id: string
  user_id: string
  service_id: string
  date: string
  time: string
  status: "pending" | "confirmed" | "cancelled"
  created_at: string
}

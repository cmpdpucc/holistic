import { z } from "zod"

export const validateEmail = (email: string) => {
  return z.string().email().parse(email)
}

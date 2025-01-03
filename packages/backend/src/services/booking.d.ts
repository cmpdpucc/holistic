import { Booking } from "../types/booking";
export declare const bookingService: {
    createBooking(booking: Omit<Booking, "id" | "created_at">): Promise<Booking>;
};

System.register(["../config/supabase"], function (exports_1, context_1) {
    "use strict";
    var supabase_1, bookingService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (supabase_1_1) {
                supabase_1 = supabase_1_1;
            }
        ],
        execute: function () {
            exports_1("bookingService", bookingService = {
                async createBooking(booking) {
                    const { data, error } = await supabase_1.supabase
                        .from("bookings")
                        .insert(booking)
                        .select()
                        .single();
                    if (error)
                        throw error;
                    return data;
                }
            });
        }
    };
});

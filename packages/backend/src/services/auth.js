System.register(["../config/supabase"], function (exports_1, context_1) {
    "use strict";
    var supabase_1, authService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (supabase_1_1) {
                supabase_1 = supabase_1_1;
            }
        ],
        execute: function () {
            exports_1("authService", authService = {
                async signUp(email, password) {
                    const { data, error } = await supabase_1.supabase.auth.signUp({
                        email,
                        password,
                    });
                    if (error)
                        throw error;
                    return data;
                },
                async signIn(email, password) {
                    const { data, error } = await supabase_1.supabase.auth.signInWithPassword({
                        email,
                        password,
                    });
                    if (error)
                        throw error;
                    return data;
                },
                async signOut() {
                    const { error } = await supabase_1.supabase.auth.signOut();
                    if (error)
                        throw error;
                }
            });
        }
    };
});

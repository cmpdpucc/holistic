System.register(["@supabase/supabase-js"], function (exports_1, context_1) {
    "use strict";
    var supabase_js_1, supabase;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (supabase_js_1_1) {
                supabase_js_1 = supabase_js_1_1;
            }
        ],
        execute: function () {
            if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
                throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL');
            }
            if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
                throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY');
            }
            exports_1("supabase", supabase = supabase_js_1.createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY));
        }
    };
});

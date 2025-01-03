System.register(["../config/supabase"], function (exports_1, context_1) {
    "use strict";
    var supabase_1, blogService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (supabase_1_1) {
                supabase_1 = supabase_1_1;
            }
        ],
        execute: function () {
            exports_1("blogService", blogService = {
                async getPosts() {
                    const { data, error } = await supabase_1.supabase
                        .from("posts")
                        .select("*")
                        .order("created_at", { ascending: false });
                    if (error)
                        throw error;
                    return data;
                },
                async createPost(post) {
                    const { data, error } = await supabase_1.supabase
                        .from("posts")
                        .insert(post)
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

System.register(["./services", "./types", "./config/supabase"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var exportedNames_1 = {
        "supabase": true
    };
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default" && !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (services_1_1) {
                exportStar_1(services_1_1);
            },
            function (types_1_1) {
                exportStar_1(types_1_1);
            },
            function (supabase_1_1) {
                exports_1({
                    "supabase": supabase_1_1["supabase"]
                });
            }
        ],
        execute: function () {
        }
    };
});

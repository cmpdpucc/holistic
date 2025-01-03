System.register(["./auth", "./blog", "./booking"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (auth_1_1) {
                exportStar_1(auth_1_1);
            },
            function (blog_1_1) {
                exportStar_1(blog_1_1);
            },
            function (booking_1_1) {
                exportStar_1(booking_1_1);
            }
        ],
        execute: function () {
        }
    };
});

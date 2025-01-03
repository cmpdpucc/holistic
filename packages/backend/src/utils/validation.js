System.register(["zod"], function (exports_1, context_1) {
    "use strict";
    var zod_1, validateEmail;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (zod_1_1) {
                zod_1 = zod_1_1;
            }
        ],
        execute: function () {
            exports_1("validateEmail", validateEmail = (email) => {
                return zod_1.z.string().email().parse(email);
            });
        }
    };
});

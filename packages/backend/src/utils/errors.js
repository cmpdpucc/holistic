System.register([], function (exports_1, context_1) {
    "use strict";
    var AppError;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            AppError = class AppError extends Error {
                constructor(message, statusCode = 400) {
                    super(message);
                    this.statusCode = statusCode;
                    this.name = "AppError";
                }
            };
            exports_1("AppError", AppError);
        }
    };
});

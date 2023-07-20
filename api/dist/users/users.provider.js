"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersProviders = void 0;
const user_model_1 = require("./models/user.model");
exports.usersProviders = [
    {
        provide: 'USER_MODEL',
        useFactory: (mongoose) => mongoose.model('User', user_model_1.default),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=users.provider.js.map
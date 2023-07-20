"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose = require("mongoose");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: () => mongoose.connect(process.env.MONGO_CONNECTION),
    },
];
//# sourceMappingURL=database.providers.js.map
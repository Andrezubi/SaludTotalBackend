"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const users_entity_1 = require("./entity/users.entity");
const clinic_entity_1 = require("./entity/clinic.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "SaludTotalDB",
    synchronize: true,
    logging: false,
    entities: [users_entity_1.Paciente, users_entity_1.Medico, clinic_entity_1.Clinica],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflec-metadata");
const typeorm_1 = require("typeorm");
const clinic_entity_1 = require("../entity/clinic.entity");
const specialty_entity_1 = require("../entity/specialty.entity");
const report_entity_1 = require("../entity/report.entity");
const users_entity_1 = require("../entity/users.entity");
const users_entity_2 = require("../entity/users.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "root",
    port: 5432,
    username: "root",
    password: "J4T4T4C0NS",
    database: "Salud Total Bolivia",
    synchronize: true,
    logging: true,
    entities: [clinic_entity_1.Clinica, specialty_entity_1.Especialidad, report_entity_1.ReporteMedico, users_entity_1.Medico, users_entity_2.Paciente],
    subscribers: [],
    migrations: [],
});
//# sourceMappingURL=data-source.js.map
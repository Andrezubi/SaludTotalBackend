import "reflect-metadata"
import { DataSource } from "typeorm"

import { Paciente,Medico } from "./entity/users.entity"
import { Clinica } from "./entity/clinic.entity"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "SaludTotalDB",
    synchronize: true,
    logging: false,
    entities: [Paciente,Medico,Clinica],
    migrations: [],
    subscribers: [],
})

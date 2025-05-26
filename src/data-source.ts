import "reflect-metadata"
import { DataSource } from "typeorm"

import { Paciente } from "./entity/users.entity"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "SaludTotalDB",
    synchronize: true,
    logging: false,
    entities: [Paciente],
    migrations: [],
    subscribers: [],
})

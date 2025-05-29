import "reflec-metadata"
import { DataSource , DataSourceOptions } from "typeorm"
import { Clinica } from "../entity/clinic.entity"
import { Especiality } from "../entity/Especiality"
import { HistoryData } from "../entity/HistoryData"
import { Medico } from "../entity/users.entity"
import { Paciente } from "../entity/users.entity"

export const AppDataSource =  new DataSource({
    type: "mysql",
    host: "root",
    port: 5432,
    username: "root",
    password: "J4T4T4C0NS",
    database: "Salud Total Bolivia",
    synchronize: true,
    logging: true,
    entities: [Clinica, Especiality, HistoryData, Medico, Paciente],
    subscribers: [],
    migrations: [],
})

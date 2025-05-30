import { Paciente } from "./users.entity";
import { Medico } from "./users.entity";
export declare class ReporteMedico {
    id: string;
    medicos: Medico[];
    pacientes: Paciente[];
    fechaRegistro: Date;
    horaRegistro: string;
    diagnostico: string;
    tratamiento: string;
    notas: string;
}

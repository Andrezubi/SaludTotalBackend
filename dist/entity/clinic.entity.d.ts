import { Medico } from "./users.entity";
import { Paciente } from "./users.entity";
export declare class Clinica {
    id: string;
    nombre: string;
    medicos: Medico[];
    pacientes: Paciente[];
    ubicacion: string;
    telefono: number;
}

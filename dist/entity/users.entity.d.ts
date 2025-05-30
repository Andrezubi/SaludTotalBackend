import { Clinica } from "./clinic.entity";
import { ReporteMedico } from "./report.entity";
export declare class Paciente {
    id: string;
    ci: number;
    nombre: string;
    apellido: string;
    fechaNac: Date;
    penalizado: boolean;
    estadoCivil: string;
    direccion: string;
    correoElectronico: string;
    tipoSangre: string;
    telefono: number;
    lugarNac: string;
    genero: string;
    reporte: ReporteMedico;
    clinica: Clinica;
}
export declare class Medico {
    id: string;
    ci: number;
    nombre: string;
    apellido: string;
    clinica: Clinica;
    fechaNac: Date;
    penalizado: boolean;
    estadoCivil: string;
    direccion: string;
    correoElectronico: string;
    tipoSangre: string;
    telefono: number;
    lugarNac: string;
    genero: string;
    reporte: ReporteMedico;
}
export declare class Admin {
    id: string;
    ci: number;
    nombre: string;
    apellido: string;
    rol: string;
    fechaNac: Date;
    estadoCivil: string;
    direccion: string;
    correoElectronico: string;
    tipoSangre: string;
    telefono: number;
    lugarNac: string;
    genero: string;
}

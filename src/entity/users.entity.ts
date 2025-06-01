import { Column,Entity,ForeignKey,PrimaryColumn,PrimaryGeneratedColumn,ManyToOne, OneToMany } from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings";
import { Clinica } from "./clinic.entity";
import { ReporteMedico } from "./report.entity";
import { Reserva } from "./reserve.entity";
import { TurnoDeAtencion, TurnoMedico } from "./shift.entity";

@Entity()
export class Paciente{
    @PrimaryGeneratedColumn("uuid")
    id: string
    ////             sdafdsfasdfasdfddslfjasljdslkjlkjjkllkdj

    @Column()
    ci:number

    @Column()
    nombre: string

    @Column()
    apellido: string

    @Column()
    fechaNac: Date
    
    @Column()
    penalizado: boolean

    @Column()
    estadoCivil: string

    @Column()
    direccion: string

    @Column()
    correoElectronico: string

    @Column()
    tipoSangre: string

    @Column()
    telefono: number

    @Column()
    lugarNac: string

    @Column()
    genero : string

    @OneToMany(() => ReporteMedico, (reporte) => reporte.pacientes)
    reporte: ReporteMedico; 

    @ManyToOne(() => Clinica, (clinica) => clinica.pacientes)
    clinica: Clinica

    @OneToMany(() => Reserva, (reserva) => reserva.pacientes) // note: we will create author property in the Photo class below
    reservas: Reserva[]
}

@Entity()
export class Medico {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    ci:number

    @Column()
    nombre: string

    @Column()
    apellido: string


    @ManyToOne(() => Clinica, (clinica) => clinica.medicos)
    clinica: Clinica

    @Column()
    fechaNac: Date
    
    @Column()
    penalizado: boolean

    @Column()
    estadoCivil: string

    @Column()
    direccion: string

    @Column()
    correoElectronico: string

    @Column()
    tipoSangre: string

    @Column()
    telefono: number

    @Column()
    lugarNac: string

    @Column()
    genero : string

    @ManyToOne(() => ReporteMedico, (reporte) => reporte.medicos)
    reporte: ReporteMedico;

    @ManyToOne(() => TurnoMedico, (turno) => turno.medicos)
    turno: TurnoMedico;

    @OneToMany(() => Reserva, (reserva) => reserva.medicos) // note: we will create author property in the Photo class below
    reservas: Reserva[]

}




@Entity()
export class Admin {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    ci:number

    @Column()
    nombre: string

    @Column()
    apellido: string

    @Column()
    rol:string

    @Column()
    fechaNac: Date
    
    @Column()
    estadoCivil: string

    @Column()
    direccion: string

    @Column()
    correoElectronico: string

    @Column()
    tipoSangre: string

    @Column()
    telefono: number

    @Column()
    lugarNac: string

    @Column()
    genero : string


}
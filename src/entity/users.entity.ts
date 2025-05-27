import { Column,Entity,ForeignKey,PrimaryColumn,PrimaryGeneratedColumn,ManyToOne } from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings";
import { Clinica } from "./clinic.entity";


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
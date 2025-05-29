import { Column,Entity,ForeignKey,PrimaryColumn,PrimaryGeneratedColumn,OneToMany,JoinColumn } from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings";
import { Medico } from "./users.entity";
import { Paciente } from "./users.entity";


@Entity()
export class Clinica{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    nombre: string

    @OneToMany(() => Medico, (medico) => medico.clinica) // note: we will create author property in the Photo class below
    medicos: Medico[]

    @OneToMany(() => Paciente, (paciente) => paciente.clinica) // note: we will create author property in the Photo class below
    pacientes: Paciente[]

    @Column()
    ubicacion: string

    @Column()
    telefono: number
}

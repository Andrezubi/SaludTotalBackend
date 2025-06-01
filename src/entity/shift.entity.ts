import { Column,Entity,ForeignKey,PrimaryColumn,PrimaryGeneratedColumn,OneToMany,JoinColumn, ManyToMany, ManyToOne } from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings";
import { Clinica } from "./clinic.entity";
import { Medico } from "./users.entity";

export enum TurnoDeAtencion {
  MANIANA = "maniana",
  TARDE = "tarde",
  NOCHE = "no noche",
}

@Entity()   
export class TurnoMedico{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @OneToMany(() => Medico, (medico) => medico.turno) // note: we will create author property in the Photo class below
    medicos: Medico[]
    
    @ManyToOne(() => Clinica, (clinica) => clinica.turnos) // note: we will create author property in the Photo class below
    clinica: Clinica

    @Column({
    type: "enum",
    enum: TurnoDeAtencion,
    default: TurnoDeAtencion.MANIANA,
    })
    estado: TurnoDeAtencion;
}
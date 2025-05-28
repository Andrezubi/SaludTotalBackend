import { Column,Entity,ForeignKey,PrimaryColumn,PrimaryGeneratedColumn,OneToMany,JoinColumn, ManyToMany, ManyToOne } from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings";
import { Paciente } from "./users.entity";
import { Medico } from "./users.entity";

@Entity()   
export class HistorialMedico{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @OneToMany(() => Medico, (medico) => medico.historial) // note: we will create author property in the Photo class below
    medicos: Medico[]

    @Column()
    fechaRegistro: Date

    @Column({ type: 'time' })
    horaRegistro: string;

    @ManyToOne(() => Paciente, (paciente) => paciente.historial) // note: we will create author property in the Photo class below
    pacientes: Paciente[]
    

}
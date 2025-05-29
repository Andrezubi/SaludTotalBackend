import { Column,Entity,ForeignKey,PrimaryColumn,PrimaryGeneratedColumn,OneToMany,JoinColumn, ManyToMany, ManyToOne } from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings";
import { Paciente } from "./users.entity";
import { Medico } from "./users.entity";

@Entity()   
export class ReporteMedico{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @OneToMany(() => Medico, (medico) => medico.reporte) // note: we will create author property in the Photo class below
    medicos: Medico[]
    
    @ManyToOne(() => Paciente, (paciente) => paciente.reporte) // note: we will create author property in the Photo class below
    pacientes: Paciente[]

    @Column()
    fechaRegistro: Date

    @Column({ type: 'time' })
    horaRegistro: string;

    @Column()
    diagnostico: string

    @Column()
    tratamiento: string

    @Column()
    notas: string
}
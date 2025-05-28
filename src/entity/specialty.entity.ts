import { Column,Entity,ForeignKey,PrimaryColumn,PrimaryGeneratedColumn,OneToMany,JoinColumn } from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings";



@Entity()
export class Especialidad{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    nombre: string
    @Column()
    descripcion: string
}
 
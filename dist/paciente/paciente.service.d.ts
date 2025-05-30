import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
export declare class PacienteService {
    create(createPacienteDto: CreatePacienteDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePacienteDto: UpdatePacienteDto): string;
    remove(id: number): string;
}

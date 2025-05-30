import { CreateClinicaDto } from './dto/create-clinica.dto';
import { UpdateClinicaDto } from './dto/update-clinica.dto';
export declare class ClinicaService {
    create(createClinicaDto: CreateClinicaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateClinicaDto: UpdateClinicaDto): string;
    remove(id: number): string;
}

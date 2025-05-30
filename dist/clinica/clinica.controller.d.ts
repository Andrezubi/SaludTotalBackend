import { ClinicaService } from './clinica.service';
import { CreateClinicaDto } from './dto/create-clinica.dto';
import { UpdateClinicaDto } from './dto/update-clinica.dto';
export declare class ClinicaController {
    private readonly clinicaService;
    constructor(clinicaService: ClinicaService);
    create(createClinicaDto: CreateClinicaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateClinicaDto: UpdateClinicaDto): string;
    remove(id: string): string;
}

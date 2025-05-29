import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteModule } from './paciente/paciente.module';
import { MedicoModule } from './medico/medico.module';
import { ClinicaModule } from './clinica/clinica.module';

@Module({
  imports: [PacienteModule, MedicoModule, ClinicaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

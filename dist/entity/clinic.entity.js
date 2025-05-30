"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clinica = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = require("./users.entity");
const users_entity_2 = require("./users.entity");
let Clinica = class Clinica {
    id;
    nombre;
    medicos;
    pacientes;
    ubicacion;
    telefono;
};
exports.Clinica = Clinica;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Clinica.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Clinica.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => users_entity_1.Medico, (medico) => medico.clinica),
    __metadata("design:type", Array)
], Clinica.prototype, "medicos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => users_entity_2.Paciente, (paciente) => paciente.clinica),
    __metadata("design:type", Array)
], Clinica.prototype, "pacientes", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Clinica.prototype, "ubicacion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Clinica.prototype, "telefono", void 0);
exports.Clinica = Clinica = __decorate([
    (0, typeorm_1.Entity)()
], Clinica);
//# sourceMappingURL=clinic.entity.js.map
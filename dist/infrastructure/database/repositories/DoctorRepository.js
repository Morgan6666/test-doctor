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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorRepository = void 0;
const DoctorModel_1 = require("../../../domain/models/DoctorModel");
const BaseRepository_1 = require("./BaseRepository");
const IDoctorRepository_1 = require("../../../application/ports/IDoctorRepository");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const DoctorEntity_1 = require("../mapper/DoctorEntity");
const common_1 = require("@nestjs/common");
const PatientModel_1 = require("../../../domain/models/PatientModel");
let DoctorRepository = (() => {
    let DoctorRepository = class DoctorRepository extends BaseRepository_1.BaseRepository {
        constructor(connection) {
            super(connection, DoctorEntity_1.DoctorEntity);
            this.connection = connection;
        }
        async createDoctor(entity) {
            const result = await this.connection.query(`INSERT INTO doctors(first_name,last_name,email) VALUES('${entity.firstName}','${entity.lastName}','${entity.email}');`);
            return result;
        }
        async checkDoctor(entity) {
            const result = await this.connection.query(`SELECT id FROM doctors WHERE email='${entity.email}';`);
            if (result.length == 0) {
                return null;
            }
            else {
                return result;
            }
        }
    };
    DoctorRepository = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_2.InjectConnection()),
        __metadata("design:paramtypes", [typeorm_1.Connection])
    ], DoctorRepository);
    return DoctorRepository;
})();
exports.DoctorRepository = DoctorRepository;
//# sourceMappingURL=DoctorRepository.js.map
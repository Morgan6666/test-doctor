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
exports.PatientRepository = void 0;
const common_1 = require("@nestjs/common");
const BaseRepository_1 = require("./BaseRepository");
const PatientModel_1 = require("../../../domain/models/PatientModel");
const typeorm_1 = require("typeorm");
const PatientEntity_1 = require("../mapper/PatientEntity");
const IPatientRepository_1 = require("../../../application/ports/IPatientRepository");
const IPatientBaseRepository_1 = require("../../../application/ports/IPatientBaseRepository");
const typeorm_2 = require("@nestjs/typeorm");
let PatientRepository = (() => {
    let PatientRepository = class PatientRepository extends BaseRepository_1.BaseRepository {
        constructor(connection) {
            super(connection, PatientEntity_1.PatientEntity);
            this.connection = connection;
        }
        async addDoctorPatient(entity) {
            const result = await this.connection.query(`INSERT INTO doctor_patients(doctor_id, patient_id) VALUES(
            (SELECT id FROM doctors WHERE email = '${entity.doctorEmail}'),
            (SELECT id FROM patients WHERE email = '${entity.email}'));`);
            return result;
        }
        async addPatient(entity) {
            const result = await this.connection.query(`INSERT INTO patients(first_name, last_name, sure_name, time_receipt, email) VALUES ('${entity.firstName}', '${entity.lastName}', '${entity.surName}', '${entity.timeReceipt}', '${entity.email}');`);
            return result;
        }
        async getAllDoctors() {
            const result = await this.connection.query(`SELECT
            TO_CHAR(dd.time_receipt, 'DD:MM:YYYY HH24:MI:SS') as doctor_time,
            TO_CHAR(pp.time_receipt, 'DD:MM:YYYY HH24:MI:SS') as patient_time,
            DATE_PART('days',AGE(dd.time_receipt, pp.time_receipt ))   as days_diff,
            DATE_PART('hours',AGE(dd.time_receipt, pp.time_receipt ))   as hours_diff,
            DATE_PART('mins',AGE(dd.time_receipt, pp.time_receipt ))   as mins_diff,


            dd.first_name as doctor_first_name,
            pp.email as patient_email,
            dd.last_name as doctor_last_name,
            dd.sure_name as doctor_surname,
            dd.email as doctor_email,
            cc.address as clinick_address



        FROM doctor_patients as dp
            JOIN patients as pp ON dp.patient_id = pp.id
            JOIN doctors as dd ON dp.doctor_id = dd.id
            JOIN clinics as cc ON dd.clinics_id = cc.id;`);
            if (result.length == 0) {
                return null;
            }
            else {
                return result;
            }
        }
        async checkRecord(entity) {
            console.log(this.connection);
            const result = await this.connection.query(`SELECT doctor_id, patient_id
            FROM doctor_patients WHERE doctor_id = (SELECT id FROM doctors WHERE email = '${entity.doctorEmail}') AND patient_id = (SELECT id FROM patients WHERE email = '${entity.email}');`);
            if (result.length == 0) {
                return null;
            }
            else {
                return result;
            }
        }
        async checkPatient(entity) {
            const result = await this.connection.query(`SELECT id FROM patients WHERE email='${entity.email}';`);
            if (result.length == 0) {
                return null;
            }
            else {
                return result;
            }
        }
    };
    PatientRepository = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_2.InjectConnection()),
        __metadata("design:paramtypes", [typeorm_1.Connection])
    ], PatientRepository);
    return PatientRepository;
})();
exports.PatientRepository = PatientRepository;
//# sourceMappingURL=PatientRepository.js.map
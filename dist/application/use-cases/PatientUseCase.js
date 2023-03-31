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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientUsecase = void 0;
const common_1 = require("@nestjs/common");
const IPatientRepository_1 = require("../ports/IPatientRepository");
const UserExceptions_1 = require("../../domain/exceptions/UserExceptions");
const PatientModel_1 = require("../../domain/models/PatientModel");
const email_service_1 = __importDefault(require("../../domain/services/email.service"));
const emailSchedule_service_1 = __importDefault(require("../../domain/services/emailSchedule.service"));
const ServiceResponse_1 = require("../../infrastructure/utils/ServiceResponse");
let PatientUsecase = (() => {
    var PatientUsecase_1;
    let PatientUsecase = PatientUsecase_1 = class PatientUsecase {
        constructor(patientRepository, emailService) {
            this.patientRepository = patientRepository;
            this.emailService = emailService;
            this.logger = new common_1.Logger(PatientUsecase_1.name);
            this.userException = new UserExceptions_1.UserExceptions();
            this.serviceRes = new ServiceResponse_1.ServiceResponse();
        }
        async addPatientRecover(entity) {
            const checkRecord = await this.patientRepository.checkRecord(entity);
            if (!checkRecord) {
                this.logger.warn(`Запись не существует, добавим пациента на запись:${entity.email}`);
                const checkPatient = await this.patientRepository.checkPatient(entity);
                if (!checkPatient) {
                    const addPatient = await this.patientRepository.addPatient(entity);
                    this.logger.warn(`Пациент добавлен`);
                    const addRecord = await this.patientRepository.addDoctorPatient(entity);
                    this.logger.warn(`Запись на приём добавлена`);
                    return this.serviceRes.recordSuccessfully();
                }
                else {
                    this.logger.warn(`Пользователь уже существует. Добавим запис к врачу`);
                    const addRecord = await this.patientRepository.addDoctorPatient(entity);
                    return this.serviceRes.recordSuccessfully();
                }
            }
            else {
                this.logger.warn(`Запись к врачу уже сущетсвует`);
                return this.serviceRes.recordAlreadyExists();
            }
        }
        async getAllDoctors() {
            const result = await this.patientRepository.getAllDoctors();
            for (var i = 0; i < result.length; i++) {
                if (Number(result[i].days_diff) == 1 && Number(result[i].hours_diff) == 6 && Number(result[i].mins_diff) == 0) {
                    console.log('Yeah');
                }
                else if (Number(result[i].days_diff) == 0 && Number(result[i].hours_diff) == 1 && Number(result[i].mins_diff) == 30) {
                    const mail = await this.emailService.sendMail({
                        to: "test@mail.ru",
                        subject: "Оповещение",
                        text: `ФИО доктора:\n${result[i].doctor_first_name} ${result[i].doctor_last_name} ${result[i].doctor_surname}\nДата:${result[i].patient_time}\nВремя приёма:${result[i].patient_time.split(' ')[1].split(":").slice(0, 2).join(":")}\nАдресс:${result[i].clinick_address}`
                    });
                }
            }
            this.logger.log(`Получили данные по записи`);
            return this.serviceRes.uniqueSuccessRes(result);
        }
    };
    PatientUsecase = PatientUsecase_1 = __decorate([
        common_1.Injectable(),
        __metadata("design:paramtypes", [IPatientRepository_1.IPatientRepository,
            email_service_1.default])
    ], PatientUsecase);
    return PatientUsecase;
})();
exports.PatientUsecase = PatientUsecase;
//# sourceMappingURL=PatientUseCase.js.map
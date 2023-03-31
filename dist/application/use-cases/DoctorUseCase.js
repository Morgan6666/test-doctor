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
exports.DoctorUsecase = void 0;
const common_1 = require("@nestjs/common");
const IDoctorRepository_1 = require("../ports/IDoctorRepository");
const UserExceptions_1 = require("../../domain/exceptions/UserExceptions");
const DoctorModel_1 = require("../../domain/models/DoctorModel");
const ServiceResponse_1 = require("../../infrastructure/utils/ServiceResponse");
let DoctorUsecase = (() => {
    var DoctorUsecase_1;
    let DoctorUsecase = DoctorUsecase_1 = class DoctorUsecase {
        constructor(doctorRepository) {
            this.doctorRepository = doctorRepository;
            this.logger = new common_1.Logger(DoctorUsecase_1.name);
            this.userException = new UserExceptions_1.UserExceptions();
            this.serviceRes = new ServiceResponse_1.ServiceResponse();
        }
        async createDoctor(doctor) {
            const checkDoc = await this.doctorRepository.checkDoctor(doctor);
            if (!checkDoc) {
                this.logger.warn(`Доктор не существует:${checkDoc}`);
                const result = await this.doctorRepository.createDoctor(doctor);
                this.logger.warn(`Добавили доктора в базу:${doctor.email}`);
                return this.serviceRes.doctorSuccessfulyCreated();
            }
            else {
                this.logger.warn(`Доктор существует в базе:${checkDoc.email};`);
                return this.serviceRes.documentsAlreadyExists();
            }
        }
    };
    DoctorUsecase = DoctorUsecase_1 = __decorate([
        common_1.Injectable(),
        __metadata("design:paramtypes", [IDoctorRepository_1.IDoctorRepository])
    ], DoctorUsecase);
    return DoctorUsecase;
})();
exports.DoctorUsecase = DoctorUsecase;
//# sourceMappingURL=DoctorUseCase.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientModule = void 0;
const common_1 = require("@nestjs/common");
const IPatientBaseRepository_1 = require("../../application/ports/IPatientBaseRepository");
const IPatientRepository_1 = require("../../application/ports/IPatientRepository");
const PatientUseCase_1 = require("../../application/use-cases/PatientUseCase");
const PatientRepository_1 = require("../database/repositories/PatientRepository");
const PatientsController_1 = require("../../presentation/controllers/PatientsController");
const email_module_1 = require("./email.module");
let PatientModule = (() => {
    let PatientModule = class PatientModule {
    };
    PatientModule = __decorate([
        common_1.Module({
            imports: [email_module_1.EmailModule],
            controllers: [PatientsController_1.PatientController],
            providers: [
                PatientUseCase_1.PatientUsecase,
                { provide: IPatientRepository_1.IPatientRepository, useClass: PatientRepository_1.PatientRepository },
            ],
        })
    ], PatientModule);
    return PatientModule;
})();
exports.PatientModule = PatientModule;
//# sourceMappingURL=patient.module.js.map
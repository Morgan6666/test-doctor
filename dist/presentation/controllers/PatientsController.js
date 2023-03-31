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
exports.PatientController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const BadRequestError_1 = require("../errors/BadRequestError");
const UnprocessableEntityError_1 = require("../errors/UnprocessableEntityError");
const PatientUseCase_1 = require("../../application/use-cases/PatientUseCase");
const PatientVM_1 = require("../view-models/patients/PatientVM");
let PatientController = (() => {
    let PatientController = class PatientController {
        constructor(patientUsecase) {
            this.patientUsecase = patientUsecase;
        }
        async addPatientRecord(patientData) {
            const result = await this.patientUsecase.addPatientRecover(PatientVM_1.PatientVM.fromViewModel(patientData));
            return result;
        }
        async getPatientRecord() {
            const result = await this.patientUsecase.getAllDoctors();
            return result;
        }
    };
    __decorate([
        common_1.Post('add_record'),
        swagger_1.ApiOperation({
            summary: "Add patient record to doctor"
        }),
        swagger_1.ApiResponse({ description: "Record add successfully" }),
        swagger_1.ApiBadRequestResponse({
            description: "The request object doesnt th expected one",
            type: BadRequestError_1.BadRequestError,
        }),
        swagger_1.ApiUnprocessableEntityResponse({
            description: "Validation error while file upload",
            type: UnprocessableEntityError_1.UnprocessableEntityError,
        }),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [PatientVM_1.PatientVM]),
        __metadata("design:returntype", Promise)
    ], PatientController.prototype, "addPatientRecord", null);
    __decorate([
        common_1.Get('records'),
        swagger_1.ApiOperation({
            summary: "Get patients records"
        }),
        swagger_1.ApiResponse({ description: "Record add successfully" }),
        swagger_1.ApiBadRequestResponse({
            description: "The request object doesnt th expected one",
            type: BadRequestError_1.BadRequestError,
        }),
        swagger_1.ApiUnprocessableEntityResponse({
            description: "Validation error while file upload",
            type: UnprocessableEntityError_1.UnprocessableEntityError,
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], PatientController.prototype, "getPatientRecord", null);
    PatientController = __decorate([
        swagger_1.ApiTags("patient"),
        common_1.Controller("patient"),
        __metadata("design:paramtypes", [PatientUseCase_1.PatientUsecase])
    ], PatientController);
    return PatientController;
})();
exports.PatientController = PatientController;
//# sourceMappingURL=PatientsController.js.map
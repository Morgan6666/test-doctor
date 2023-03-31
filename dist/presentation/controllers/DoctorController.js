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
exports.DoctorController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const DoctorUseCase_1 = require("../../application/use-cases/DoctorUseCase");
const BadRequestError_1 = require("../errors/BadRequestError");
const UnprocessableEntityError_1 = require("../errors/UnprocessableEntityError");
const DoctorVM_1 = require("../view-models/doctor/DoctorVM");
let DoctorController = (() => {
    let DoctorController = class DoctorController {
        constructor(doctorUsecase) {
            this.doctorUsecase = doctorUsecase;
        }
        async addDoctor(docData) {
            const result = await this.doctorUsecase.createDoctor(DoctorVM_1.DoctorVM.fromViewModel(docData));
            return result;
        }
    };
    __decorate([
        common_1.Post('add'),
        swagger_1.ApiOperation({
            summary: "Add doctor doctor"
        }),
        swagger_1.ApiResponse({ description: "Doctor add successfully" }),
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
        __metadata("design:paramtypes", [DoctorVM_1.DoctorVM]),
        __metadata("design:returntype", Promise)
    ], DoctorController.prototype, "addDoctor", null);
    DoctorController = __decorate([
        swagger_1.ApiTags("doctor"),
        common_1.Controller("doctor"),
        __metadata("design:paramtypes", [DoctorUseCase_1.DoctorUsecase])
    ], DoctorController);
    return DoctorController;
})();
exports.DoctorController = DoctorController;
//# sourceMappingURL=DoctorController.js.map
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
exports.PatientVM = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const PatientModel_1 = require("../../../domain/models/PatientModel");
let PatientVM = (() => {
    class PatientVM {
        static fromViewModel(vm) {
            return new PatientModel_1.PatientModel(vm.firstName, vm.lastName, vm.surName, vm.email, vm.doctorEmail, vm.timeReceipt);
        }
    }
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty(),
        swagger_1.ApiProperty({
            description: "Имя пациента",
            example: "Джон"
        }),
        __metadata("design:type", String)
    ], PatientVM.prototype, "firstName", void 0);
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty(),
        swagger_1.ApiProperty({
            description: "Фамилия пациента",
            example: "Кеннеди"
        }),
        __metadata("design:type", String)
    ], PatientVM.prototype, "lastName", void 0);
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty(),
        swagger_1.ApiProperty({
            description: "Отчество",
            example: "Леонидович"
        }),
        __metadata("design:type", String)
    ], PatientVM.prototype, "surName", void 0);
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsEmail(),
        swagger_1.ApiProperty({
            description: "Email",
            example: "test1@mail.ru"
        }),
        __metadata("design:type", String)
    ], PatientVM.prototype, "email", void 0);
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsEmail(),
        swagger_1.ApiProperty({
            description: "Email доктора",
            example: "test@mail.ru"
        }),
        __metadata("design:type", String)
    ], PatientVM.prototype, "doctorEmail", void 0);
    __decorate([
        class_validator_1.IsString(),
        swagger_1.ApiProperty({
            description: "Время приёма",
            example: "2023-03-31 12:48:59.000000"
        }),
        __metadata("design:type", Date)
    ], PatientVM.prototype, "timeReceipt", void 0);
    return PatientVM;
})();
exports.PatientVM = PatientVM;
//# sourceMappingURL=PatientVM.js.map
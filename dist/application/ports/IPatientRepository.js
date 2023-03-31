"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPatientRepository = void 0;
const common_1 = require("@nestjs/common");
const IPatientBaseRepository_1 = require("./IPatientBaseRepository");
const PatientModel_1 = require("../../domain/models/PatientModel");
let IPatientRepository = (() => {
    let IPatientRepository = class IPatientRepository extends IPatientBaseRepository_1.IPatientBaseRepository {
    };
    IPatientRepository = __decorate([
        common_1.Injectable()
    ], IPatientRepository);
    return IPatientRepository;
})();
exports.IPatientRepository = IPatientRepository;
//# sourceMappingURL=IPatientRepository.js.map
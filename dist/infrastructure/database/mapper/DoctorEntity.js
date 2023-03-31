"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorEntity = void 0;
const DoctorModel_1 = require("../../../domain/models/DoctorModel");
const typeorm_1 = require("typeorm");
const BaseEntity_1 = require("./BaseEntity");
exports.DoctorEntity = new typeorm_1.EntitySchema({
    name: "doctor",
    tableName: "doctor",
    target: DoctorModel_1.DoctorModel,
    columns: Object.assign(Object.assign({}, BaseEntity_1.BaseEntity), { firstName: {
            type: String,
        }, lastName: {
            type: String,
        } })
});
//# sourceMappingURL=DoctorEntity.js.map
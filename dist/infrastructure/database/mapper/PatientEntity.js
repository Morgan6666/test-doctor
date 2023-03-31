"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientEntity = void 0;
const typeorm_1 = require("typeorm");
const BaseEntity_1 = require("./BaseEntity");
const PatientModel_1 = require("../../../domain/models/PatientModel");
exports.PatientEntity = new typeorm_1.EntitySchema({
    name: "patient",
    tableName: "patient",
    target: PatientModel_1.PatientModel,
    columns: Object.assign(Object.assign({}, BaseEntity_1.BaseEntity), { firstName: {
            type: String
        }, lastName: {
            type: String,
        }, email: {
            type: String,
        } })
});
//# sourceMappingURL=PatientEntity.js.map
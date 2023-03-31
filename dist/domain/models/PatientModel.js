"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientModel = void 0;
const IEntity_1 = require("../shared/IEntity");
class PatientModel {
    constructor(firstName, lastName, sureName, email, doctorEmail, timeReceipt) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.surName = sureName;
        this.email = email;
        this.doctorEmail = doctorEmail;
        this.timeReceipt = timeReceipt;
    }
    equals(entity) {
        if (!(entity instanceof PatientModel))
            return false;
        return this.email === entity.email;
    }
}
exports.PatientModel = PatientModel;
//# sourceMappingURL=PatientModel.js.map
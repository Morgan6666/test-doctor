"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorModel = void 0;
const IEntity_1 = require("../shared/IEntity");
class DoctorModel {
    constructor(firstName, lastName, email, clinickName, timeReceipt, surName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.clinickName = clinickName;
        this.timeReceipt = timeReceipt;
    }
    equals(entity) {
        if (!(entity instanceof DoctorModel))
            return false;
        return this.email === entity.email;
    }
}
exports.DoctorModel = DoctorModel;
//# sourceMappingURL=DoctorModel.js.map
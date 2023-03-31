"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceResponse = void 0;
const messageConstants_1 = require("./messageConstants");
const messageConstants_2 = require("./messageConstants");
const messageConstants_3 = require("./messageConstants");
class ServiceResponse {
    uniqueServiceErrorRes(success, code, message) {
        return {
            Success: success,
            Message: message,
            Code: code,
        };
    }
    uniqueServiceRes(success, code, message, content) {
        return {
            Success: success,
            Message: message,
            Code: code,
            Content: content,
        };
    }
    uniqueSuccessRes(content) {
        return this.uniqueServiceRes(messageConstants_3.SUCCESS_TRUE, messageConstants_1.CODE_200, messageConstants_1.SUCCESS, content);
    }
    polisSuccessAdded() {
        return this.uniqueServiceErrorRes(messageConstants_3.SUCCESS_TRUE, messageConstants_1.CODE_200, messageConstants_1.CLIENT_POLIS_SUCCESSFULLY_ADDED);
    }
    passwordMismatch() {
        return this.uniqueServiceErrorRes(messageConstants_3.SUCCESS_FALSE, messageConstants_2.CODE_403, messageConstants_1.PASSWORD_MISMATCH);
    }
    polisAlreadyExists() {
        return this.uniqueServiceErrorRes(messageConstants_3.SUCCESS_FALSE, messageConstants_2.CODE_403, messageConstants_1.CLIENT_POLIS_ALREADY_EXISTS);
    }
    documnetsNotFound() {
        return this.uniqueServiceErrorRes(messageConstants_3.SUCCESS_FALSE, messageConstants_2.CODE_403, messageConstants_1.DOCUMENTS_NOT_FOUND);
    }
    recordSuccessfully() {
        return this.uniqueServiceErrorRes(messageConstants_3.SUCCESS_TRUE, messageConstants_1.CODE_200, messageConstants_1.RECORD_SUCCESSFULY_ADDED);
    }
    recordAlreadyExists() {
        return this.uniqueServiceErrorRes(messageConstants_3.SUCCESS_FALSE, messageConstants_2.CODE_403, messageConstants_1.RECORD_ALREADY_EXISTS);
    }
    documentsAddSuccessfully() {
        return this.uniqueServiceErrorRes(messageConstants_3.SUCCESS_TRUE, messageConstants_1.CODE_200, messageConstants_1.DOCUMENTS_ADD_SUCCESSFULLY);
    }
    documentsAlreadyExists() {
        return this.uniqueServiceErrorRes(messageConstants_3.SUCCESS_FALSE, messageConstants_2.CODE_403, messageConstants_1.DOCUMENTS_ALREADY_EXISTS);
    }
    patientsNotFound() {
        return this.uniqueServiceErrorRes(messageConstants_3.SUCCESS_FALSE, messageConstants_2.CODE_404, messageConstants_1.PATIENTS_DOESNT_EXISTS);
    }
    userNotFound() {
        return this.uniqueServiceErrorRes(messageConstants_3.SUCCESS_FALSE, messageConstants_2.CODE_404, messageConstants_1.USER_DOESNT_EXIST);
    }
    passwordSuccessUpdate() {
        return this.uniqueServiceErrorRes(messageConstants_3.SUCCESS_TRUE, messageConstants_1.CODE_200, messageConstants_1.USER_PASSWORD_SUCCESS);
    }
    userAlreadyExist() {
        return this.uniqueServiceErrorRes(messageConstants_3.SUCCESS_FALSE, messageConstants_2.CODE_403, messageConstants_1.USER_ALREADY_EXIST);
    }
    userSuccessfulyCreated() {
        return this.uniqueServiceErrorRes(messageConstants_3.SUCCESS_TRUE, messageConstants_1.CODE_200, messageConstants_1.USER_SUCCESSFULLY_CREATED);
    }
    userNotAuthorisated() {
        return this.uniqueServiceErrorRes(messageConstants_3.SUCCESS_FALSE, messageConstants_2.CODE_403, messageConstants_1.USER_NOT_AUTHORISATE);
    }
    metaSuccessfulyAdded() {
        return this.uniqueServiceErrorRes(messageConstants_3.SUCCESS_TRUE, messageConstants_1.CODE_200, messageConstants_1.META_SUCCESSFULLY_ADDED);
    }
    internalServerError() {
        return this.uniqueServiceErrorRes(messageConstants_3.SUCCESS_FALSE, messageConstants_2.CODE_500, messageConstants_1.INTERNAL_SERVER_ERROR);
    }
    doctorAlreadyExists() {
        return this.uniqueServiceErrorRes(messageConstants_3.SUCCESS_FALSE, messageConstants_2.CODE_403, messageConstants_1.DOCTOR_ALREADY_EXISTS);
    }
    doctorDoesntExists() {
        return this.uniqueServiceErrorRes(messageConstants_3.SUCCESS_FALSE, messageConstants_2.CODE_404, messageConstants_1.DOCTOR_DOESNT_EXISTS);
    }
    doctorSuccessfulyCreated() {
        return this.uniqueServiceErrorRes(messageConstants_3.SUCCESS_TRUE, messageConstants_1.CODE_200, messageConstants_1.DOCTOR_SUCCESSFULY_CREATED);
    }
}
exports.ServiceResponse = ServiceResponse;
//# sourceMappingURL=ServiceResponse.js.map
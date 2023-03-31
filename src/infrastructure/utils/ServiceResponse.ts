import {
  USER_DOESNT_EXIST,
  USER_ALREADY_EXIST,
  USER_SUCCESSFULLY_CREATED,
  USER_NOT_AUTHORISATE,
  META_SUCCESSFULLY_ADDED,
  CODE_200,
  INTERNAL_SERVER_ERROR,
  DOCTOR_ALREADY_EXISTS,
  DOCTOR_DOESNT_EXISTS,
  DOCTOR_SUCCESSFULY_CREATED,
  SUCCESS,
  PATIENTS_DOESNT_EXISTS,
  DOCUMENTS_ADD_SUCCESSFULLY,
  DOCUMENTS_ERROR,
  DOCUMENTS_NOT_FOUND,
  DOCUMENTS_ALREADY_EXISTS,
  CLIENT_POLIS_SUCCESSFULLY_ADDED,
  CLIENT_POLIS_ALREADY_EXISTS,
  USER_PASSWORD_SUCCESS,
  PASSWORD_MISMATCH,
  RECORD_SUCCESSFULY_ADDED,
  RECORD_ALREADY_EXISTS,
} from './messageConstants';
import { CODE_403, CODE_500, CODE_404 } from './messageConstants';
import { SUCCESS_FALSE, SUCCESS_TRUE, EMPTY_CONTENT } from './messageConstants';

export class ServiceResponse {
  uniqueServiceErrorRes(success: boolean, code: number, message: string) {
    return {
      Success: success,
      Message: message,
      Code: code,
    };
  }

  uniqueServiceRes(
    success: boolean,
    code: number,
    message: string,
    content: object,
  ) {
    return {
      Success: success,
      Message: message,
      Code: code,
      Content: content,
    };
  }

  uniqueSuccessRes(content: Object) {
    return this.uniqueServiceRes(SUCCESS_TRUE, CODE_200, SUCCESS, content);
  }

  polisSuccessAdded() {
    return this.uniqueServiceErrorRes(
      SUCCESS_TRUE,
      CODE_200,
      CLIENT_POLIS_SUCCESSFULLY_ADDED,
    );
  }
  passwordMismatch() {
    return this.uniqueServiceErrorRes(
      SUCCESS_FALSE,
      CODE_403,
      PASSWORD_MISMATCH,
    );
  }

  polisAlreadyExists() {
    return this.uniqueServiceErrorRes(
      SUCCESS_FALSE,
      CODE_403,
      CLIENT_POLIS_ALREADY_EXISTS,
    );
  }

  documnetsNotFound() {
    return this.uniqueServiceErrorRes(
      SUCCESS_FALSE,
      CODE_403,
      DOCUMENTS_NOT_FOUND,
    );
  }
  recordSuccessfully() {
    return this.uniqueServiceErrorRes(
      SUCCESS_TRUE,
      CODE_200,
      RECORD_SUCCESSFULY_ADDED
    )
  }
  recordAlreadyExists() {
    return this.uniqueServiceErrorRes(
      SUCCESS_FALSE,
      CODE_403,
      RECORD_ALREADY_EXISTS
    )
  }

  documentsAddSuccessfully() {
    return this.uniqueServiceErrorRes(
      SUCCESS_TRUE,
      CODE_200,
      DOCUMENTS_ADD_SUCCESSFULLY,
    );
  }

  documentsAlreadyExists() {
    return this.uniqueServiceErrorRes(
      SUCCESS_FALSE,
      CODE_403,
      DOCUMENTS_ALREADY_EXISTS,
    );
  }
  patientsNotFound() {
    return this.uniqueServiceErrorRes(
      SUCCESS_FALSE,
      CODE_404,
      PATIENTS_DOESNT_EXISTS,
    );
  }
  userNotFound() {
    return this.uniqueServiceErrorRes(
      SUCCESS_FALSE,
      CODE_404,
      USER_DOESNT_EXIST,
    );
  }
  passwordSuccessUpdate() {
    return this.uniqueServiceErrorRes(
      SUCCESS_TRUE,
      CODE_200,
      USER_PASSWORD_SUCCESS,
    );
  }
  userAlreadyExist() {
    return this.uniqueServiceErrorRes(
      SUCCESS_FALSE,
      CODE_403,
      USER_ALREADY_EXIST,
    );
  }
  userSuccessfulyCreated() {
    return this.uniqueServiceErrorRes(
      SUCCESS_TRUE,
      CODE_200,
      USER_SUCCESSFULLY_CREATED,
    );
  }
  userNotAuthorisated() {
    return this.uniqueServiceErrorRes(
      SUCCESS_FALSE,
      CODE_403,
      USER_NOT_AUTHORISATE,
    );
  }
  metaSuccessfulyAdded() {
    return this.uniqueServiceErrorRes(
      SUCCESS_TRUE,
      CODE_200,
      META_SUCCESSFULLY_ADDED,
    );
  }
  internalServerError() {
    return this.uniqueServiceErrorRes(
      SUCCESS_FALSE,
      CODE_500,
      INTERNAL_SERVER_ERROR,
    );
  }
  doctorAlreadyExists() {
    return this.uniqueServiceErrorRes(
      SUCCESS_FALSE,
      CODE_403,
      DOCTOR_ALREADY_EXISTS,
    );
  }
  doctorDoesntExists() {
    return this.uniqueServiceErrorRes(
      SUCCESS_FALSE,
      CODE_404,
      DOCTOR_DOESNT_EXISTS,
    );
  }
  doctorSuccessfulyCreated() {
    return this.uniqueServiceErrorRes(
      SUCCESS_TRUE,
      CODE_200,
      DOCTOR_SUCCESSFULY_CREATED,
    );
  }
}

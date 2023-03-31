export declare class ServiceResponse {
    uniqueServiceErrorRes(success: boolean, code: number, message: string): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    uniqueServiceRes(success: boolean, code: number, message: string, content: object): {
        Success: boolean;
        Message: string;
        Code: number;
        Content: object;
    };
    uniqueSuccessRes(content: Object): {
        Success: boolean;
        Message: string;
        Code: number;
        Content: object;
    };
    polisSuccessAdded(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    passwordMismatch(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    polisAlreadyExists(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    documnetsNotFound(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    recordSuccessfully(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    recordAlreadyExists(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    documentsAddSuccessfully(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    documentsAlreadyExists(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    patientsNotFound(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    userNotFound(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    passwordSuccessUpdate(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    userAlreadyExist(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    userSuccessfulyCreated(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    userNotAuthorisated(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    metaSuccessfulyAdded(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    internalServerError(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    doctorAlreadyExists(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    doctorDoesntExists(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    doctorSuccessfulyCreated(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
}

import { IPatientRepository } from "application/ports/IPatientRepository";
import { UserExceptions } from "domain/exceptions/UserExceptions";
import { PatientModel } from "domain/models/PatientModel";
import EmailService from "domain/services/email.service";
import { ServiceResponse } from "infrastructure/utils/ServiceResponse";
export declare class PatientUsecase {
    private readonly patientRepository;
    private readonly emailService;
    private readonly logger;
    userException: UserExceptions;
    serviceRes: ServiceResponse;
    constructor(patientRepository: IPatientRepository, emailService: EmailService);
    addPatientRecover(entity: PatientModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getAllDoctors(): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
        Content: object;
    }>;
}

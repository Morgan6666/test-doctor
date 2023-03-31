import { IDoctorRepository } from "application/ports/IDoctorRepository";
import { UserExceptions } from "domain/exceptions/UserExceptions";
import { DoctorModel } from "domain/models/DoctorModel";
import { ServiceResponse } from "infrastructure/utils/ServiceResponse";
export declare class DoctorUsecase {
    private readonly doctorRepository;
    private readonly logger;
    userException: UserExceptions;
    serviceRes: ServiceResponse;
    constructor(doctorRepository: IDoctorRepository);
    createDoctor(doctor: DoctorModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
}

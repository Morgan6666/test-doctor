import { PatientUsecase } from "application/use-cases/PatientUseCase";
import { PatientVM } from "presentation/view-models/patients/PatientVM";
export declare class PatientController {
    private readonly patientUsecase;
    constructor(patientUsecase: PatientUsecase);
    addPatientRecord(patientData: PatientVM): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getPatientRecord(): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
        Content: object;
    }>;
}

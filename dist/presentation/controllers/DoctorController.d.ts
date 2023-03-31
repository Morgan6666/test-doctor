import { DoctorUsecase } from "application/use-cases/DoctorUseCase";
import { DoctorVM } from "presentation/view-models/doctor/DoctorVM";
export declare class DoctorController {
    private readonly doctorUsecase;
    constructor(doctorUsecase: DoctorUsecase);
    addDoctor(docData: DoctorVM): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
}

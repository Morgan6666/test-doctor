import { PatientModel } from "domain/models/PatientModel";
export declare class PatientVM {
    firstName: string;
    lastName: string;
    surName?: string;
    email: string;
    doctorEmail?: string;
    timeReceipt?: Date;
    static fromViewModel(vm: PatientVM): PatientModel;
}

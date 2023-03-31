import { DoctorModel } from "domain/models/DoctorModel";
export declare class DoctorVM {
    firstName: string;
    lastName: string;
    surName: string;
    email: string;
    clinickName?: string;
    timeReceipt: Date;
    static fromViewModel(vm: DoctorVM): DoctorModel;
}

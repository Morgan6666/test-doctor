import { IEntity } from "domain/shared/IEntity";
export declare class PatientModel {
    firstName?: string;
    lastName?: string;
    surName?: string;
    email?: string;
    doctorEmail?: string;
    timeReceipt?: Date;
    constructor(firstName: string, lastName: string, sureName: string, email: string, doctorEmail: string, timeReceipt: Date);
    equals(entity: IEntity): boolean;
}

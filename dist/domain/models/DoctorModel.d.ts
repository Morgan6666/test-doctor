import { IEntity } from "domain/shared/IEntity";
export declare class DoctorModel {
    firstName: string;
    lastName: string;
    surName: string;
    email: string;
    clinickName: string;
    timeReceipt: Date;
    constructor(firstName: string, lastName: string, email: string, clinickName: string, timeReceipt: Date, surName: string);
    equals(entity: IEntity): boolean;
}

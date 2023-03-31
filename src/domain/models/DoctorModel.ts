import { IEntity } from "domain/shared/IEntity"


export class DoctorModel {
    firstName: string
    lastName: string
    surName: string
    email: string
    clinickName: string
    timeReceipt: Date

    constructor(firstName: string, lastName: string, email: string, clinickName: string, timeReceipt: Date, surName: string){
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.clinickName = clinickName
        this.timeReceipt = timeReceipt
    }
    equals(entity: IEntity): boolean {
        if (!(entity instanceof DoctorModel)) return false;
        return this.email === entity.email;
      }

}
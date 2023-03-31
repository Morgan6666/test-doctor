import { IEntity } from "domain/shared/IEntity"
import { last } from "lodash"
import { throwIfEmpty } from "rxjs/operators"


export class PatientModel {
    firstName?: string
    lastName?: string
    surName?: string
    email?: string
    doctorEmail?: string
    timeReceipt?: Date


    constructor(firstName: string, lastName: string, sureName: string, email: string, doctorEmail: string, timeReceipt: Date) {
        this.firstName = firstName
        this.lastName = lastName
        this.surName = sureName
        this.email = email
        this.doctorEmail= doctorEmail
        this.timeReceipt = timeReceipt
        
    }

    equals(entity: IEntity): boolean {
        if (!(entity instanceof PatientModel)) return false;
        return this.email === entity.email;
      }
}
import { Injectable } from "@nestjs/common";


@Injectable()
export abstract class IPatientBaseRepository<Entity> {
    abstract addPatient(entity: Entity);
    abstract addDoctorPatient(entity: Entity);
    abstract getAllDoctors();
    abstract checkRecord(entity: Entity)
    abstract checkPatient(entity: Entity)
}
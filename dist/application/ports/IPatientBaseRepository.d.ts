export declare abstract class IPatientBaseRepository<Entity> {
    abstract addPatient(entity: Entity): any;
    abstract addDoctorPatient(entity: Entity): any;
    abstract getAllDoctors(): any;
    abstract checkRecord(entity: Entity): any;
    abstract checkPatient(entity: Entity): any;
}

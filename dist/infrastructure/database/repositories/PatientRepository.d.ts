import { BaseRepository } from "./BaseRepository";
import { PatientModel } from "domain/models/PatientModel";
import { Connection } from "typeorm";
import { IPatientRepository } from "application/ports/IPatientRepository";
export declare class PatientRepository extends BaseRepository<PatientModel> implements IPatientRepository {
    connection: Connection;
    constructor(connection: Connection);
    addDoctorPatient(entity: PatientModel): Promise<any>;
    addPatient(entity: PatientModel): Promise<any>;
    getAllDoctors(): Promise<any>;
    checkRecord(entity: PatientModel): Promise<any>;
    checkPatient(entity: PatientModel): Promise<any>;
}

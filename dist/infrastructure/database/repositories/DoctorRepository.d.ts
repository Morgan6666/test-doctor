import { DoctorModel } from "domain/models/DoctorModel";
import { BaseRepository } from "./BaseRepository";
import { IDoctorRepository } from "application/ports/IDoctorRepository";
import { Connection } from "typeorm";
export declare class DoctorRepository extends BaseRepository<DoctorModel> implements IDoctorRepository {
    connection: Connection;
    constructor(connection: Connection);
    createDoctor(entity: DoctorModel): Promise<any>;
    checkDoctor(entity: DoctorModel): Promise<any>;
}

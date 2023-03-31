import { DoctorModel } from "domain/models/DoctorModel";
import { BaseRepository } from "./BaseRepository";
import { IDoctorRepository } from "application/ports/IDoctorRepository";
import { Connection } from "typeorm";
import { InjectConnection } from "@nestjs/typeorm";
import { DoctorEntity } from "../mapper/DoctorEntity";
import { Injectable } from "@nestjs/common";
import { PatientModel } from "domain/models/PatientModel";
import { runInThisContext } from "vm";



@Injectable()
export class DoctorRepository extends BaseRepository<DoctorModel>
implements IDoctorRepository{
    connection: Connection;
    constructor(@InjectConnection() connection: Connection) {
        super(connection, DoctorEntity)
        this.connection = connection;
    }

    async createDoctor(entity: DoctorModel) {
        const result = await this.connection.query(`INSERT INTO doctors(first_name,last_name,email) VALUES('${entity.firstName}','${entity.lastName}','${entity.email}');`)
        return result
    }

    async checkDoctor(entity: DoctorModel) {
        const result = await this.connection.query(`SELECT id FROM doctors WHERE email='${entity.email}';`)
        if (result.length == 0) {
            return null;
          }
        else{
            return result
        }
    }
    


    

    
}




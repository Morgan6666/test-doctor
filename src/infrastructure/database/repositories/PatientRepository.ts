import { Injectable } from "@nestjs/common";
import { BaseRepository } from "./BaseRepository";
import { PatientModel } from "domain/models/PatientModel";
import { Connection, Entity } from "typeorm";
import { PatientEntity } from "../mapper/PatientEntity";
import { IPatientRepository } from "application/ports/IPatientRepository";
import { IPatientBaseRepository } from "application/ports/IPatientBaseRepository";
import { InjectConnection } from "@nestjs/typeorm";


@Injectable()
export class PatientRepository extends BaseRepository<PatientModel>
implements IPatientRepository{
    connection: Connection;
    constructor(@InjectConnection() connection: Connection) {
        super(connection, PatientEntity)
        this.connection = connection;
    }


    async addDoctorPatient(entity: PatientModel) {
        
        const result = await this.connection.query(
            `INSERT INTO doctor_patients(doctor_id, patient_id) VALUES(
            (SELECT id FROM doctors WHERE email = '${entity.doctorEmail}'),
            (SELECT id FROM patients WHERE email = '${entity.email}'));`)
        return result
    }

    async addPatient(entity: PatientModel) {
        const result = await this.connection.query(
            `INSERT INTO patients(first_name, last_name, sure_name, time_receipt, email) VALUES ('${entity.firstName}', '${entity.lastName}', '${entity.surName}', '${entity.timeReceipt}', '${entity.email}');`
        )
        return result
    }

    async getAllDoctors() {
        const result = await this.connection.query(
            `SELECT
            TO_CHAR(dd.time_receipt, 'DD:MM:YYYY HH24:MI:SS') as doctor_time,
            TO_CHAR(pp.time_receipt, 'DD:MM:YYYY HH24:MI:SS') as patient_time,
            DATE_PART('days',AGE(dd.time_receipt, pp.time_receipt ))   as days_diff,
            DATE_PART('hours',AGE(dd.time_receipt, pp.time_receipt ))   as hours_diff,
            DATE_PART('mins',AGE(dd.time_receipt, pp.time_receipt ))   as mins_diff,


            dd.first_name as doctor_first_name,
            pp.email as patient_email,
            dd.last_name as doctor_last_name,
            dd.sure_name as doctor_surname,
            dd.email as doctor_email,
            cc.address as clinick_address



        FROM doctor_patients as dp
            JOIN patients as pp ON dp.patient_id = pp.id
            JOIN doctors as dd ON dp.doctor_id = dd.id
            JOIN clinics as cc ON dd.clinics_id = cc.id;`
        )

        if(result.length == 0) {
            return null;
        }
        else{
            return result;
        }
    }
    async checkRecord(entity: PatientModel) {
        console.log(this.connection)
        const result = await this.connection.query(
            `SELECT doctor_id, patient_id
            FROM doctor_patients WHERE doctor_id = (SELECT id FROM doctors WHERE email = '${entity.doctorEmail}') AND patient_id = (SELECT id FROM patients WHERE email = '${entity.email}');`
        )
        if(result.length == 0) {
            return null;
        }
        else{
            return result;
        }
    }

    async checkPatient(entity: PatientModel) {
        const result = await this.connection.query(
            `SELECT id FROM patients WHERE email='${entity.email}';`
        )
        if(result.length == 0) {
            return null;
        }
        else{
            return result;
        }
    }
}
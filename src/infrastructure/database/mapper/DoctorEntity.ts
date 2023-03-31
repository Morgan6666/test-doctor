import { DoctorModel } from "domain/models/DoctorModel";
import { Entity, EntitySchema } from "typeorm";
import { BaseEntity } from "./BaseEntity";


export const DoctorEntity = new EntitySchema<DoctorModel> ({
    name: "doctor",
    tableName: "doctor",
    target: DoctorModel,
    columns: {
        ...BaseEntity,
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        }
    }
});
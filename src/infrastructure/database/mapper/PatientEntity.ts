import { EntitySchema } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { PatientModel } from "domain/models/PatientModel";



export const PatientEntity = new EntitySchema<PatientModel> ({
    name: "patient",
    tableName: "patient",
    target: PatientModel,
    columns: {
        ...BaseEntity,
        firstName: {
            type: String
        },
        lastName: {
            type: String,
        },
        email: {
            type: String,
        }
        

    }
})

import { Injectable } from "@nestjs/common";
import {  IPatientBaseRepository } from "./IPatientBaseRepository";

import { PatientModel } from "domain/models/PatientModel";

@Injectable()
export abstract class IPatientRepository extends IPatientBaseRepository<PatientModel>{}
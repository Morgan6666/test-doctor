import { Injectable } from "@nestjs/common";
import { DoctorModel } from "domain/models/DoctorModel";
import { IRepository } from "./IRepository";


@Injectable()
export abstract class IDoctorRepository extends IRepository<DoctorModel>{}
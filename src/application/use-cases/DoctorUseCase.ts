import { Injectable, Logger } from "@nestjs/common";
import { IDoctorRepository } from "application/ports/IDoctorRepository";
import { UserExceptions } from "domain/exceptions/UserExceptions";
import { DoctorModel } from "domain/models/DoctorModel";
import { ServiceResponse } from "infrastructure/utils/ServiceResponse";


@Injectable()
export class DoctorUsecase {
    private readonly logger = new Logger(DoctorUsecase.name);
    public userException = new UserExceptions();
    public serviceRes = new ServiceResponse();
    constructor(private readonly doctorRepository: IDoctorRepository) {}


    async createDoctor(doctor: DoctorModel){
        const checkDoc = await this.doctorRepository.checkDoctor(doctor);
        if(!checkDoc){
            this.logger.warn(`Доктор не существует:${checkDoc}`);
            const result = await this.doctorRepository.createDoctor(doctor);
            this.logger.warn(`Добавили доктора в базу:${doctor.email}`);
            return this.serviceRes.doctorSuccessfulyCreated()
            
        }
        else{
            this.logger.warn(`Доктор существует в базе:${checkDoc.email};`)
            return this.serviceRes.documentsAlreadyExists()
        } 
    }
}
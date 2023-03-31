import { Injectable, Logger } from "@nestjs/common";
import { IPatientRepository } from "application/ports/IPatientRepository";


import { UserExceptions } from "domain/exceptions/UserExceptions";
import { PatientModel } from "domain/models/PatientModel";
import EmailService from "domain/services/email.service";
import EmailSchedulingService from "domain/services/emailSchedule.service";

import { ServiceResponse } from "infrastructure/utils/ServiceResponse";


@Injectable()
export class PatientUsecase {
  private readonly logger = new Logger(PatientUsecase.name);
  public userException = new UserExceptions();
  public serviceRes = new ServiceResponse();
  constructor(
    private readonly patientRepository: IPatientRepository,
    private readonly emailService: EmailService
    ) {}
  
  async addPatientRecover(entity: PatientModel) {
      const checkRecord = await this.patientRepository.checkRecord(entity);
      if(!checkRecord) {
        this.logger.warn(`Запись не существует, добавим пациента на запись:${entity.email}`)
        const checkPatient  = await this.patientRepository.checkPatient(entity)
        if(!checkPatient){
          const addPatient = await this.patientRepository.addPatient(entity);
          this.logger.warn(`Пациент добавлен`)
          const addRecord = await this.patientRepository.addDoctorPatient(entity);
          this.logger.warn(`Запись на приём добавлена`)
          return this.serviceRes.recordSuccessfully()  
        }
        else{
          this.logger.warn(`Пользователь уже существует. Добавим запис к врачу`)
          const addRecord = await this.patientRepository.addDoctorPatient(entity);
          return this.serviceRes.recordSuccessfully()
        }
        
      }
      else{
        this.logger.warn(`Запись к врачу уже сущетсвует`)
        return this.serviceRes.recordAlreadyExists()
      }
  }

 
  async getAllDoctors() {
    const result = await this.patientRepository.getAllDoctors()
    //Number(result[i].days_diff) == 0  && Number(result[i].hours_diff) == 1 && Number(result[i].mins_dff) == 30
    for( var i = 0; i< result.length; i++){
      
      
      if(Number(result[i].days_diff) == 1 &&  Number(result[i].hours_diff) == 6 && Number(result[i].mins_diff) == 0){
        const mail =  await this.emailService.sendMail({
          to: "test@mail.ru",
          subject: "Оповещение" ,
          text: `ФИО доктора:\n${result[i].doctor_first_name} ${result[i].doctor_last_name} ${result[i].doctor_surname}\nДата:${result[i].patient_time}\nВремя приёма:${result[i].patient_time.split(' ')[1].split(":").slice(0, 2).join(":")}\nАдресс:${result[i].clinick_address}`
        })
    
      }
      else if(Number(result[i].days_diff) == 0  && Number(result[i].hours_diff) == 1 && Number(result[i].mins_diff) == 30){
        
       const mail =  await this.emailService.sendMail({
            to: "test@mail.ru",
            subject: "Оповещение" ,
            text: `ФИО доктора:\n${result[i].doctor_first_name} ${result[i].doctor_last_name} ${result[i].doctor_surname}\nДата:${result[i].patient_time}\nВремя приёма:${result[i].patient_time.split(' ')[1].split(":").slice(0, 2).join(":")}\nАдресс:${result[i].clinick_address}`
          })
      }
      
    }

    this.logger.log(`Получили данные по записи`)
    return this.serviceRes.uniqueSuccessRes(result)
  }
  

  
}



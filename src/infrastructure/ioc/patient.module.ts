import { Module } from "@nestjs/common";
import { IPatientBaseRepository } from "application/ports/IPatientBaseRepository";
import { IPatientRepository } from "application/ports/IPatientRepository";
import { PatientUsecase } from "application/use-cases/PatientUseCase";
import { PatientRepository } from "infrastructure/database/repositories/PatientRepository";
import { PatientController } from "presentation/controllers/PatientsController";
import { EmailModule } from "./email.module";


@Module({
    imports: [EmailModule],
    controllers:   [PatientController],
    providers: [
      PatientUsecase,
      { provide:IPatientRepository , useClass:PatientRepository},
    ],
  })
  export class PatientModule {}
  
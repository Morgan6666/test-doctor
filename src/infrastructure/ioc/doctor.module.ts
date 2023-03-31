import { Module } from "@nestjs/common";
import { IDoctorRepository } from "application/ports/IDoctorRepository";
import { IRepository } from "application/ports/IRepository";
import { DoctorUsecase } from "application/use-cases/DoctorUseCase";
import { DoctorRepository } from "infrastructure/database/repositories/DoctorRepository";
import { DoctorController } from "presentation/controllers/DoctorController";

@Module({
    imports: [],
    controllers: [DoctorController],
    providers: [
        DoctorUsecase,
        {provide:IDoctorRepository, useClass: DoctorRepository }
    ],
})
export class DoctorModule {}
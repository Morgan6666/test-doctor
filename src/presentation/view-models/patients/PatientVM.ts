import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEmail, IsNotEmpty, IsString } from "class-validator";
import { PatientModel } from "domain/models/PatientModel";


export class PatientVM {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "Имя пациента",
        example: "Джон"
    })
    firstName: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "Фамилия пациента",
        example: "Кеннеди"
    })
    lastName: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "Отчество",
        example: "Леонидович"
    })
    surName?: string


    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({
        description: "Email",
        example: "test1@mail.ru"
    })
    email: string


    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({
        description: "Email доктора",
        example: "test@mail.ru"
    })
    doctorEmail?: string


    @IsString()
    @ApiProperty({
        description: "Время приёма",
        example: "2023-03-31 12:48:59.000000"
    })
    timeReceipt?: Date

    static fromViewModel(vm: PatientVM): PatientModel {
        
        return new PatientModel(vm.firstName, vm.lastName, vm.surName, vm.email, vm.doctorEmail, vm.timeReceipt);
      }
}
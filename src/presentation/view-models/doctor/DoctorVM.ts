import { ApiProperty } from "@nestjs/swagger"
import { IsDate, IsEmail, IsNotEmpty, IsString } from "class-validator"
import { DoctorModel } from "domain/models/DoctorModel"


export class DoctorVM {
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
    surName: string


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
    @ApiProperty({
        description: "Email доктора",
        example: "doctor@mail.ru"
    })
    clinickName?: string


    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "Время приёма",
        example: "2023-03-31 12:48:59.000000"
    })
    timeReceipt: Date

    static fromViewModel(vm: DoctorVM): DoctorModel {
        
        return new DoctorModel(vm.firstName, vm.lastName, vm.email, vm.clinickName, vm.timeReceipt, vm.surName);
      }

    }

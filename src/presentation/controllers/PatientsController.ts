import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from "@nestjs/swagger";


import bodyParser from "body-parser";
import { diskStorage } from "multer";
import { extname } from "path";
import { BadRequestError } from "presentation/errors/BadRequestError";
import { UnprocessableEntityError } from "presentation/errors/UnprocessableEntityError";

import { PatientUsecase } from "application/use-cases/PatientUseCase";
import { PatientVM } from "presentation/view-models/patients/PatientVM";
@ApiTags("patient")
@Controller("patient")
export class PatientController {
  constructor(private readonly patientUsecase: PatientUsecase) {}

  @Post('add_record')
  @ApiOperation({
    summary: "Add patient record to doctor"
  })
  @ApiResponse(
    {description: "Record add successfully"})
  @ApiBadRequestResponse({
        description: "The request object doesnt th expected one",
          type: BadRequestError,
      })
  @ApiUnprocessableEntityResponse({
        description: "Validation error while file upload",
        type: UnprocessableEntityError,
            })
  async addPatientRecord(@Body() patientData: PatientVM) {
    const result = await this.patientUsecase.addPatientRecover(PatientVM.fromViewModel(patientData))
    return result
  }



  @Get('records')
  @ApiOperation({
    summary: "Get patients records"
  })
  @ApiResponse(
    {description: "Record add successfully"})
  @ApiBadRequestResponse({
        description: "The request object doesnt th expected one",
          type: BadRequestError,
      })
  @ApiUnprocessableEntityResponse({
        description: "Validation error while file upload",
        type: UnprocessableEntityError,
            })

  async getPatientRecord(){
    const result = await this.patientUsecase.getAllDoctors()
    return result
  }


}

import { Body, Controller, Post } from "@nestjs/common";
import { ApiBadRequestResponse, ApiOperation, ApiResponse, ApiTags, ApiUnprocessableEntityResponse } from "@nestjs/swagger";
import { DoctorUsecase } from "application/use-cases/DoctorUseCase";
import { BadRequestError } from "presentation/errors/BadRequestError";
import { UnprocessableEntityError } from "presentation/errors/UnprocessableEntityError";
import { DoctorVM } from "presentation/view-models/doctor/DoctorVM";


@ApiTags("doctor")
@Controller("doctor")
export class DoctorController {
    constructor(private readonly doctorUsecase: DoctorUsecase) {}


  @Post('add')
  @ApiOperation({
    summary: "Add doctor doctor"
  })
  @ApiResponse(
    {description: "Doctor add successfully"})
  @ApiBadRequestResponse({
        description: "The request object doesnt th expected one",
          type: BadRequestError,
      })
  @ApiUnprocessableEntityResponse({
        description: "Validation error while file upload",
        type: UnprocessableEntityError,
            })

    async addDoctor(@Body() docData: DoctorVM) {
        const result = await this.doctorUsecase.createDoctor(DoctorVM.fromViewModel(docData))
        return result
    }
}
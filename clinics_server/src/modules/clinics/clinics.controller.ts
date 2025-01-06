import {Controller, Get, Param, ParseIntPipe, Query} from "@nestjs/common";
import {ClinicsService} from "./clinics.service";

@Controller('api/clinics')
export class ClinicsController {
    constructor(private clinicsService: ClinicsService) {}

    @Get('list')
    async getClinics(@Query('city') city: string) {
        return await this.clinicsService.getClinicsList(city);
    }

    @Get('cities')
    async getCities() {
        return await this.clinicsService.getCitiesForFilter();
    }

    @Get('single-clinic/:id')
    async getSingleClinicById(@Param('id', ParseIntPipe) id: number) {
        return await this.clinicsService.getById(id);
    }

    @Get('departments')
    async getDepartmentsByClinicId(@Query('clinicId') clinicId: number) {
        return await this.clinicsService.getDepartmentsByClinicId(+clinicId);
    }

    @Get("department/:id")
    async getDepartmentById(@Param('id', ParseIntPipe) id: number) {
        return await this.clinicsService.getDepartmentById(id);
    }
}
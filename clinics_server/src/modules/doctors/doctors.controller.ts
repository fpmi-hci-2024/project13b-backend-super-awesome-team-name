import {Controller, Get, Query} from "@nestjs/common";
import {DoctorsService} from "./doctors.service";

@Controller("api/doctors")
export class DoctorsController {
    constructor(private doctorsService: DoctorsService) {}

    @Get()
    async getDoctors(
        @Query('departmentId') departmentId?: number,
        @Query('city') city?: string,
        @Query('clinic') clinic?: string,
        @Query('department') department?: string,
    ) {
        return await this.doctorsService.getDoctors(+departmentId, city, clinic, department);
    }

    @Get('cities')
    async getCitiesForFilter() {
        return await this.doctorsService.getCities();
    }

    @Get('clinics')
    async getClinicsForFilter() {
        return await this.doctorsService.getClinics();
    }

    @Get('departments')
    async getDepartmentsForFilter() {
        return await this.doctorsService.getDepartments();
    }
}
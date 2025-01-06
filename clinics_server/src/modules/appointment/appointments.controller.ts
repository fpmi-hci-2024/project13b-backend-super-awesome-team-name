import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import {AppointmentsService} from "./appointments.service";
import {CreateAppointmentDto} from "../../dtos/create.appointment.dto";

@Controller('api/appointments')
export class AppointmentsController {

    constructor(private readonly appointmentsService: AppointmentsService) {}

    @Get()
    findAll(@Query('doctorId') doctorId: number, @Query('date') date: string) {
        return this.appointmentsService.findAll(+doctorId, date);
    }

    @Get('available_times')
    findAvailableTimes(@Query('doctorId') doctorId: number, @Query('date') date: string) {
        return this.appointmentsService.findAvailableTimes(+doctorId, date);
    }

    @Post()
    create(@Body() createAppointmentDto: CreateAppointmentDto) {
        return this.appointmentsService.create(createAppointmentDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.appointmentsService.remove(+id);
    }
}

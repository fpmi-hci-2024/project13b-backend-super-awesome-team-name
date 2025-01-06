import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import {AppointmentEntity} from "../sequelize/entities/appointment.entity";
import {CreateAppointmentDto} from "../../dtos/create.appointment.dto";

@Injectable()
export class AppointmentsService {

    constructor(
        @InjectModel(AppointmentEntity) private appointmentModel: typeof AppointmentEntity
    ) { }

    async findAll(doctorId: number, date: string): Promise<AppointmentEntity[]> {
        return await this.appointmentModel.findAll({ where: { doctorId, date } });
    }

    async findAvailableTimes(doctorId: number, date: string): Promise<string[]> {
        const appointments = await this.appointmentModel.findAll({
            where: {
                doctorId,
                date,
            },
            attributes: ['time'], // Select only the time field
        });
        return appointments.map(appointment => appointment.time);

    }

    async create(createAppointmentDto: CreateAppointmentDto): Promise<AppointmentEntity> {
        return await this.appointmentModel.create(createAppointmentDto as AppointmentEntity);
    }

    async remove(id: number): Promise<void> {
        const appointment = await this.appointmentModel.findByPk(id);
        await appointment.destroy();
    }
}
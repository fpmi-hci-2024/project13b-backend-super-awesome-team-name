import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {AppointmentEntity} from "../sequelize/entities/appointment.entity";
import {AppointmentsService} from "./appointments.service";
import {AppointmentsController} from "./appointments.controller";

@Module({
    imports: [SequelizeModule.forFeature([AppointmentEntity])],
    controllers: [AppointmentsController],
    providers: [AppointmentsService],
    exports: [AppointmentsService]
})
export class AppointmentsModule {}
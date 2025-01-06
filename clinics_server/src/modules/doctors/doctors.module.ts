import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {DoctorEntity} from "../sequelize/entities/doctor.entity";
import {DoctorsController} from "./doctors.controller";
import {DoctorsService} from "./doctors.service";

@Module({
    imports: [SequelizeModule.forFeature([DoctorEntity])],
    controllers: [DoctorsController],
    providers: [DoctorsService],
    exports: [DoctorsService]
})
export class DoctorsModule {}
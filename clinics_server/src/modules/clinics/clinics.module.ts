import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";

import {ClinicEntity} from "../sequelize/entities/clinic.entity";
import {ClinicsController} from "./clinics.controller";
import {ClinicsService} from "./clinics.service";
import {DepartmentEntity} from "../sequelize/entities/department.entity";

@Module({
    imports: [SequelizeModule.forFeature([ClinicEntity, DepartmentEntity])],
    controllers: [ClinicsController],
    providers: [ClinicsService],
    exports: [ClinicsService]
})
export class ClinicsModule {}
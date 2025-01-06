import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsersModule} from "./modules/users/users.module";
import {UserEntity} from "./modules/sequelize/entities/user.entity";
import {SequelizeModule} from "@nestjs/sequelize";
import {AuthModule} from "./modules/auth/auth.module";
import {ClinicEntity} from "./modules/sequelize/entities/clinic.entity";
import {ClinicsModule} from "./modules/clinics/clinics.module";
import {DepartmentEntity} from "./modules/sequelize/entities/department.entity";
import {DoctorEntity} from "./modules/sequelize/entities/doctor.entity";
import {DoctorsModule} from "./modules/doctors/doctors.module";
import {AppointmentEntity} from "./modules/sequelize/entities/appointment.entity";
import {AppointmentsModule} from "./modules/appointment/appointments.module";

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'postgres',
    models: [UserEntity, ClinicEntity, DepartmentEntity, DoctorEntity, AppointmentEntity],
    autoLoadModels: true,
    synchronize: true,
  }),
    UsersModule,
    AuthModule,
    ClinicsModule,
    DoctorsModule,
    AppointmentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

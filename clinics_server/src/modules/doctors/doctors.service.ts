import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {DoctorEntity} from "../sequelize/entities/doctor.entity";
import {QueryTypes} from "sequelize";

@Injectable()
export class DoctorsService {
    constructor(
        @InjectModel(DoctorEntity) private doctorModel: typeof DoctorEntity,
    ) {}

    async getDoctors(departmentId?: number, city?: string, clinic?: string, department?: string): Promise<DoctorEntity[]> {
        let queryString = `
        SELECT "doctor"."id", "doctor"."name", "doctor"."description", "doctor"."graduation", "doctor"."specialty"
        FROM "doctor"
        INNER JOIN "department" ON "doctor"."departmentId" = "department"."id"
        INNER JOIN "clinic" ON "department"."clinicId" = "clinic"."id"
        `;
        if (departmentId) {
            queryString += ` WHERE "departmentId" = ${departmentId}`;
        }
        if (city && city !== 'null') {
            if (!departmentId) {
                queryString += ` WHERE "clinic"."city" = '${city}'`
            } else {
                queryString += ` AND "clinic"."city" = '${city}'`
            }
        }
        if (clinic && clinic !== 'null') {
            if (!departmentId && !city) {
                queryString += ` WHERE "clinic"."name" = '${clinic}'`
            } else {
                queryString += ` AND "clinic"."name" = '${clinic}'`
            }
        }
        if (department && department !== 'null') {
            if (!departmentId && !city && !clinic) {
                queryString += ` WHERE "department"."name" = '${department}'`
            } else {
                queryString += ` AND "department"."name" = '${department}'`
            }
        }
        return await this.doctorModel.sequelize.query<DoctorEntity>(
            queryString, { type: QueryTypes.SELECT }
        );
    }

    async getCities() {
        const queryString = `
        SELECT DISTINCT "clinic"."city"
        FROM "clinic"
        INNER JOIN "department" ON "clinic"."id" = "department"."clinicId"
        INNER JOIN "doctor" ON "department"."id" = "doctor"."departmentId" 
        `
        const result = await this.doctorModel.sequelize.query<{ city: string }>(
            queryString, { type: QueryTypes.SELECT }
        );
        return result.map(item => item.city);
    }

    async getClinics() {
        const queryString = `
        SELECT DISTINCT "clinic"."name"
        FROM "clinic"
        INNER JOIN "department" ON "clinic"."id" = "department"."clinicId"
        INNER JOIN "doctor" ON "department"."id" = "doctor"."departmentId" 
        `
        const result = await this.doctorModel.sequelize.query<{ name: string }>(
            queryString, { type: QueryTypes.SELECT }
        );
        return result.map(item => item.name);
    }

    async getDepartments() {
        const queryString = `
        SELECT DISTINCT "department"."name"
        FROM "department"
        INNER JOIN "doctor" ON "department"."id" = "doctor"."departmentId" 
        `
        const result = await this.doctorModel.sequelize.query<{ name: string }>(
            queryString, { type: QueryTypes.SELECT }
        );
        return result.map(item => item.name);
    }
}
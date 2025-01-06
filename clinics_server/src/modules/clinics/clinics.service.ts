import {InjectModel} from "@nestjs/sequelize";
import {ClinicEntity} from "../sequelize/entities/clinic.entity";
import {Injectable} from "@nestjs/common";
import {QueryTypes} from "sequelize";
import {DepartmentEntity} from "../sequelize/entities/department.entity";

@Injectable()
export class ClinicsService {
    constructor(
        @InjectModel(ClinicEntity) private clinicModel: typeof ClinicEntity,
        @InjectModel(DepartmentEntity) private departmentModel: typeof DepartmentEntity,
    ) {}

    async getClinicsList(city?: string) {
        return this.clinicModel.findAll({
            where: city ? {
                city
            } : {}
        });
    }

    async getCitiesForFilter() {
        const queryString = `SELECT DISTINCT "city" FROM "clinic"`;
        const result = await this.clinicModel.sequelize.query<{ city: string }>(
            queryString, { type: QueryTypes.SELECT }
        );
        return result.map(item => item.city);
    }

    async getById(id: number) {
        return await this.clinicModel.findByPk(id);
    }

    async getDepartmentsByClinicId(clinicId: number) {
        return await this.departmentModel.findAll({
            where: {
                clinicId
            }
        });
    }

    async getDepartmentById(id: number) {
        return await this.departmentModel.findByPk(id);
    }
}
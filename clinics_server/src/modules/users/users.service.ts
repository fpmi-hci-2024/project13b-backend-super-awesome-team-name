import {UserEntity} from "../sequelize/entities/user.entity";
import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(UserEntity) private userModel: typeof UserEntity,
    ) {}

    async getByUsername(username: string) {
        return this.userModel.findOne({
            where: {
                username,
            }
        });
    }

    async getById(id: number) {
        return this.userModel.findOne({
            where: {
                id,
            }
        });
    }
}
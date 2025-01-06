import {UsersService} from "./users.service";
import {Controller, Get, Param, ParseIntPipe} from "@nestjs/common";
import {UserEntity} from "../sequelize/entities/user.entity";

@Controller("api/users")
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get(":id")
    async getUserById(@Param("id", ParseIntPipe) id: number): Promise<UserEntity> {
        return await this.usersService.getById(id);
    }
}
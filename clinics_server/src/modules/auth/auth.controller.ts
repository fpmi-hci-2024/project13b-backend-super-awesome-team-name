import {Body, Controller, Post} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {LoginDto} from "../../dtos/login.dto";

@Controller('api/auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Body() loginDto: LoginDto): Promise<{ accessToken: string }> {
        const user = await this.authService.validateUser(loginDto.username, loginDto.password);

        if (!user) {
            throw new Error('Invalid credentials');
        }

        const payload = { username: user.username, sub: user.id, role: user.role };
        return {
            accessToken: await this.authService.login(payload),
        };
    }

    @Post('plus-vibe-login')
    async loginW(@Body() loginDto: LoginDto): Promise<{ id: number, role: string }> {
        const user = await this.authService.validateUser(loginDto.username, loginDto.password);

        if (!user) {
            throw new Error('Invalid credentials');
        }

        return { id: user.dataValues.id, role: user.dataValues.role };
    }
}
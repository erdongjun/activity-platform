import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('info')
  getInfo() {
    return this.userService.getUser();
  }

  @Post('info')
  async createInfo(@Body() createCatDto: CreateUserDto ) {
    return {
      ...createCatDto,
    }
  }

}

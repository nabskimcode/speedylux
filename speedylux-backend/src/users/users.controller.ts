import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create-users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }

  @Post()
  loginUser(): string {
    return '';
  }

  @Post()
  registerUser(@Body() createUsersDto: CreateUsersDto): string {
    return '';
  }
}

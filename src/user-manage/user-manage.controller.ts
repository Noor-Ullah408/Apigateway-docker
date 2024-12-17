import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserManageService } from './user-manage.service';
import { CreateUserDto } from 'src/dto';

@Controller('user-manage')
export class UserManageController {
  constructor(private readonly userManageService: UserManageService) {}

  @Post()
  create(@Body() createUser: CreateUserDto) {
    return this.userManageService.createUser(createUser);
  }

  @Get()
  findAll() {
    return this.userManageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userManageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUser: CreateUserDto) {
    return this.userManageService.update(+id, updateUser);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userManageService.remove(+id);
  }
}

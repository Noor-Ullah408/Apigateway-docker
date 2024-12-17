import { Module } from '@nestjs/common';
import { UserManageService } from './user-manage.service';
import { UserManageController } from './user-manage.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_MANAGE',
        transport: Transport.TCP,
        options: {
          port: 3000,
        },
      },
    ]),
  ],
  controllers: [UserManageController],
  providers: [UserManageService],
})
export class UserManageModule {}

import { Module } from '@nestjs/common';
import { UserManageModule } from './user-manage/user-manage.module';
import { TicketsModule } from './tickets/tickets.module';

@Module({
  imports: [UserManageModule, TicketsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

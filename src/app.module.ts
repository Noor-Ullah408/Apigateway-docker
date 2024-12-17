import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserManageModule } from './user-manage/user-manage.module';
import { TicketsModule } from './tickets/tickets.module';

@Module({
  imports: [UserManageModule, TicketsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

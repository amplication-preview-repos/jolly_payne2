import { Module } from "@nestjs/common";
import { UserNotificationModuleBase } from "./base/userNotification.module.base";
import { UserNotificationService } from "./userNotification.service";
import { UserNotificationController } from "./userNotification.controller";
import { UserNotificationResolver } from "./userNotification.resolver";

@Module({
  imports: [UserNotificationModuleBase],
  controllers: [UserNotificationController],
  providers: [UserNotificationService, UserNotificationResolver],
  exports: [UserNotificationService],
})
export class UserNotificationModule {}

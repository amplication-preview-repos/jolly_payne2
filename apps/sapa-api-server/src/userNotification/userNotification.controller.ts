import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserNotificationService } from "./userNotification.service";
import { UserNotificationControllerBase } from "./base/userNotification.controller.base";

@swagger.ApiTags("userNotifications")
@common.Controller("userNotifications")
export class UserNotificationController extends UserNotificationControllerBase {
  constructor(protected readonly service: UserNotificationService) {
    super(service);
  }
}

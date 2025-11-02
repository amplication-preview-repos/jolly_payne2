import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserNotificationServiceBase } from "./base/userNotification.service.base";

@Injectable()
export class UserNotificationService extends UserNotificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

import * as graphql from "@nestjs/graphql";
import { UserNotificationResolverBase } from "./base/userNotification.resolver.base";
import { UserNotification } from "./base/UserNotification";
import { UserNotificationService } from "./userNotification.service";

@graphql.Resolver(() => UserNotification)
export class UserNotificationResolver extends UserNotificationResolverBase {
  constructor(protected readonly service: UserNotificationService) {
    super(service);
  }
}

import { UserNotificationWhereInput } from "./UserNotificationWhereInput";
import { UserNotificationOrderByInput } from "./UserNotificationOrderByInput";

export type UserNotificationFindManyArgs = {
  where?: UserNotificationWhereInput;
  orderBy?: Array<UserNotificationOrderByInput>;
  skip?: number;
  take?: number;
};

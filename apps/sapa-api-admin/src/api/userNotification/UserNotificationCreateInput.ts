import { NotificationWhereUniqueInput } from "../notification/NotificationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserNotificationCreateInput = {
  isRead?: boolean | null;
  notification?: NotificationWhereUniqueInput | null;
  readAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};

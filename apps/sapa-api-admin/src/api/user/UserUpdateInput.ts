import { InputJsonValue } from "../../types";
import { UserNotificationUpdateManyWithoutUsersInput } from "./UserNotificationUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  location?: string | null;
  participantStatus?: string | null;
  password?: string;
  phone?: string | null;
  roles?: InputJsonValue;
  userNotifications?: UserNotificationUpdateManyWithoutUsersInput;
  username?: string;
};

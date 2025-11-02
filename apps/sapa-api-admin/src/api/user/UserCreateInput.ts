import { InputJsonValue } from "../../types";
import { UserNotificationCreateNestedManyWithoutUsersInput } from "./UserNotificationCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  location?: string | null;
  participantStatus?: string | null;
  password: string;
  phone?: string | null;
  roles: InputJsonValue;
  userNotifications?: UserNotificationCreateNestedManyWithoutUsersInput;
  username: string;
};

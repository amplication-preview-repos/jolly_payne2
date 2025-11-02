import { JsonValue } from "type-fest";
import { UserNotification } from "../userNotification/UserNotification";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  location: string | null;
  participantStatus: string | null;
  phone: string | null;
  roles: JsonValue;
  updatedAt: Date;
  userNotifications?: Array<UserNotification>;
  username: string;
};

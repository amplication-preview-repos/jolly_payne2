import { UserNotification as TUserNotification } from "../api/userNotification/UserNotification";

export const USERNOTIFICATION_TITLE_FIELD = "id";

export const UserNotificationTitle = (record: TUserNotification): string => {
  return record.id?.toString() || String(record.id);
};

import { UserNotificationUpdateManyWithoutNotificationsInput } from "./UserNotificationUpdateManyWithoutNotificationsInput";

export type NotificationUpdateInput = {
  attachments?: string | null;
  audience?: string | null;
  channel?: string | null;
  content?: string | null;
  title?: string | null;
  typeField?: string | null;
  userNotifications?: UserNotificationUpdateManyWithoutNotificationsInput;
};

import { UserNotificationCreateNestedManyWithoutNotificationsInput } from "./UserNotificationCreateNestedManyWithoutNotificationsInput";

export type NotificationCreateInput = {
  attachments?: string | null;
  audience?: string | null;
  channel?: string | null;
  content?: string | null;
  title?: string | null;
  typeField?: string | null;
  userNotifications?: UserNotificationCreateNestedManyWithoutNotificationsInput;
};

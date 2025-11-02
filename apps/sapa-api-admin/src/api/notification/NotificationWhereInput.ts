import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserNotificationListRelationFilter } from "../userNotification/UserNotificationListRelationFilter";

export type NotificationWhereInput = {
  attachments?: StringNullableFilter;
  audience?: StringNullableFilter;
  channel?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
  typeField?: StringNullableFilter;
  userNotifications?: UserNotificationListRelationFilter;
};

import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserNotificationListRelationFilter } from "../userNotification/UserNotificationListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  location?: StringNullableFilter;
  participantStatus?: StringNullableFilter;
  phone?: StringNullableFilter;
  userNotifications?: UserNotificationListRelationFilter;
  username?: StringFilter;
};

import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { NotificationWhereUniqueInput } from "../notification/NotificationWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserNotificationWhereInput = {
  id?: StringFilter;
  isRead?: BooleanNullableFilter;
  notification?: NotificationWhereUniqueInput;
  readAt?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};

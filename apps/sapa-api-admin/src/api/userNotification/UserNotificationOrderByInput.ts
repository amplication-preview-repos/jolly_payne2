import { SortOrder } from "../../util/SortOrder";

export type UserNotificationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isRead?: SortOrder;
  notificationId?: SortOrder;
  readAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};

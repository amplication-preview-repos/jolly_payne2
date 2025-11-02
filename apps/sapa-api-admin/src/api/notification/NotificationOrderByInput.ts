import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  attachments?: SortOrder;
  audience?: SortOrder;
  channel?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};

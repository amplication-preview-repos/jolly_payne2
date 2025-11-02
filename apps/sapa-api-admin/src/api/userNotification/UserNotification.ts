import { Notification } from "../notification/Notification";
import { User } from "../user/User";

export type UserNotification = {
  createdAt: Date;
  id: string;
  isRead: boolean | null;
  notification?: Notification | null;
  readAt: Date | null;
  updatedAt: Date;
  user?: User | null;
};

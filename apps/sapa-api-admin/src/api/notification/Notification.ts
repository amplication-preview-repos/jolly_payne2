import { UserNotification } from "../userNotification/UserNotification";

export type Notification = {
  attachments: string | null;
  audience: string | null;
  channel: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  title: string | null;
  typeField: string | null;
  updatedAt: Date;
  userNotifications?: Array<UserNotification>;
};

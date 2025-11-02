import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserNotificationTitle } from "../userNotification/UserNotificationTitle";

export const NotificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="attachments" source="attachments" />
        <TextInput label="audience" source="audience" />
        <TextInput label="channel" source="channel" />
        <TextInput label="content" multiline source="content" />
        <TextInput label="title" source="title" />
        <TextInput label="type" source="typeField" />
        <ReferenceArrayInput
          source="userNotifications"
          reference="UserNotification"
        >
          <SelectArrayInput
            optionText={UserNotificationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};

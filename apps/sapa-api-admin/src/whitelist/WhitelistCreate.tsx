import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const WhitelistCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="adminUploadBatch" source="adminUploadBatch" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="location" source="location" />
        <TextInput label="name" source="name" />
        <TextInput label="participantStatus" source="participantStatus" />
        <TextInput label="phone" source="phone" />
      </SimpleForm>
    </Create>
  );
};

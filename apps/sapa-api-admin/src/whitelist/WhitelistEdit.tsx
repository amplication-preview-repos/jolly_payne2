import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const WhitelistEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="adminUploadBatch" source="adminUploadBatch" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="location" source="location" />
        <TextInput label="name" source="name" />
        <TextInput label="participantStatus" source="participantStatus" />
        <TextInput label="phone" source="phone" />
      </SimpleForm>
    </Edit>
  );
};

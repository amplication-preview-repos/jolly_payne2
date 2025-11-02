import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const FileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="altText" source="altText" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="filename" source="filename" />
        <TextField label="height" source="height" />
        <TextField label="ID" source="id" />
        <TextField label="mimetype" source="mimetype" />
        <TextField label="publicId" source="publicId" />
        <TextField label="resourceType" source="resourceType" />
        <TextField label="size" source="size" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Uploader" source="uploader" />
        <TextField label="url" source="url" />
        <TextField label="width" source="width" />
      </SimpleShowLayout>
    </Show>
  );
};

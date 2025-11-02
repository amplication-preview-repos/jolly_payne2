import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const FileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="altText" source="altText" />
        <TextInput label="filename" source="filename" />
        <NumberInput step={1} label="height" source="height" />
        <TextInput label="mimetype" source="mimetype" />
        <TextInput label="publicId" source="publicId" />
        <TextInput label="resourceType" source="resourceType" />
        <NumberInput step={1} label="size" source="size" />
        <TextInput label="Uploader" source="uploader" />
        <TextInput label="url" source="url" />
        <NumberInput step={1} label="width" source="width" />
      </SimpleForm>
    </Create>
  );
};

import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FileList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Files"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="width" source="width" />{" "}
      </Datagrid>
    </List>
  );
};

import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MANUFACTURER_TITLE_FIELD } from "../manufacturer/ManufacturerTitle";

export const CarList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Cars"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="color" source="color" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Manufacturer"
          source="manufacturer.id"
          reference="Manufacturer"
        >
          <TextField source={MANUFACTURER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="model" source="model" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="year" source="year" />{" "}
      </Datagrid>
    </List>
  );
};

import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CAR_TITLE_FIELD } from "./CarTitle";
import { MANUFACTURER_TITLE_FIELD } from "../manufacturer/ManufacturerTitle";

export const CarShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="year" source="year" />
        <ReferenceManyField
          reference="ServiceHistory"
          target="carId"
          label="ServiceHistories"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Car" source="car.id" reference="Car">
              <TextField source={CAR_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="serviceDate" source="serviceDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

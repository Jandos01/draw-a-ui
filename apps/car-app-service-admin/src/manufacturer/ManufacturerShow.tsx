import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { MANUFACTURER_TITLE_FIELD } from "./ManufacturerTitle";

export const ManufacturerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Car"
          target="manufacturerId"
          label="Cars"
        >
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
            <TextField label="year" source="year" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

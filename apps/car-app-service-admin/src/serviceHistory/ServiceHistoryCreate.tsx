import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { CarTitle } from "../car/CarTitle";

export const ServiceHistoryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="car.id" reference="Car" label="Car">
          <SelectInput optionText={CarTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="serviceDate" source="serviceDate" />
      </SimpleForm>
    </Create>
  );
};

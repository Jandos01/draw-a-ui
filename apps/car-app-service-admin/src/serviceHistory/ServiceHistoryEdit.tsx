import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { CarTitle } from "../car/CarTitle";

export const ServiceHistoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="car.id" reference="Car" label="Car">
          <SelectInput optionText={CarTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="serviceDate" source="serviceDate" />
      </SimpleForm>
    </Edit>
  );
};

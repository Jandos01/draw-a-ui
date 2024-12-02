import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { ManufacturerTitle } from "../manufacturer/ManufacturerTitle";
import { ServiceHistoryTitle } from "../serviceHistory/ServiceHistoryTitle";

export const CarEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="color" source="color" />
        <ReferenceInput
          source="manufacturer.id"
          reference="Manufacturer"
          label="Manufacturer"
        >
          <SelectInput optionText={ManufacturerTitle} />
        </ReferenceInput>
        <TextInput label="model" source="model" />
        <ReferenceArrayInput
          source="serviceHistories"
          reference="ServiceHistory"
        >
          <SelectArrayInput
            optionText={ServiceHistoryTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput step={1} label="year" source="year" />
      </SimpleForm>
    </Edit>
  );
};

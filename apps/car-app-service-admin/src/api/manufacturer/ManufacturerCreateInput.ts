import { CarCreateNestedManyWithoutManufacturersInput } from "./CarCreateNestedManyWithoutManufacturersInput";

export type ManufacturerCreateInput = {
  cars?: CarCreateNestedManyWithoutManufacturersInput;
  country?: string | null;
  name?: string | null;
};

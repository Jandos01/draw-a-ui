import { CarUpdateManyWithoutManufacturersInput } from "./CarUpdateManyWithoutManufacturersInput";

export type ManufacturerUpdateInput = {
  cars?: CarUpdateManyWithoutManufacturersInput;
  country?: string | null;
  name?: string | null;
};

import { ManufacturerWhereUniqueInput } from "../manufacturer/ManufacturerWhereUniqueInput";
import { ServiceHistoryCreateNestedManyWithoutCarsInput } from "./ServiceHistoryCreateNestedManyWithoutCarsInput";

export type CarCreateInput = {
  color?: string | null;
  manufacturer?: ManufacturerWhereUniqueInput | null;
  model?: string | null;
  serviceHistories?: ServiceHistoryCreateNestedManyWithoutCarsInput;
  year?: number | null;
};

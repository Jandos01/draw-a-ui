import { ManufacturerWhereUniqueInput } from "../manufacturer/ManufacturerWhereUniqueInput";
import { ServiceHistoryUpdateManyWithoutCarsInput } from "./ServiceHistoryUpdateManyWithoutCarsInput";

export type CarUpdateInput = {
  color?: string | null;
  manufacturer?: ManufacturerWhereUniqueInput | null;
  model?: string | null;
  serviceHistories?: ServiceHistoryUpdateManyWithoutCarsInput;
  year?: number | null;
};

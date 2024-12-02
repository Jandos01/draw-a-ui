import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";

export type ServiceHistoryUpdateInput = {
  car?: CarWhereUniqueInput | null;
  description?: string | null;
  serviceDate?: Date | null;
};

import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";

export type ServiceHistoryCreateInput = {
  car?: CarWhereUniqueInput | null;
  description?: string | null;
  serviceDate?: Date | null;
};

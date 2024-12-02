import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ServiceHistoryWhereInput = {
  car?: CarWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  serviceDate?: DateTimeNullableFilter;
};

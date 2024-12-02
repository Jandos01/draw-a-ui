import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ManufacturerWhereUniqueInput } from "../manufacturer/ManufacturerWhereUniqueInput";
import { ServiceHistoryListRelationFilter } from "../serviceHistory/ServiceHistoryListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CarWhereInput = {
  color?: StringNullableFilter;
  id?: StringFilter;
  manufacturer?: ManufacturerWhereUniqueInput;
  model?: StringNullableFilter;
  serviceHistories?: ServiceHistoryListRelationFilter;
  year?: IntNullableFilter;
};

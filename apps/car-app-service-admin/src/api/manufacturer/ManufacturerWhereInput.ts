import { CarListRelationFilter } from "../car/CarListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ManufacturerWhereInput = {
  cars?: CarListRelationFilter;
  country?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};

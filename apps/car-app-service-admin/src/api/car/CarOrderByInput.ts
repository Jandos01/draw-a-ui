import { SortOrder } from "../../util/SortOrder";

export type CarOrderByInput = {
  color?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  manufacturerId?: SortOrder;
  model?: SortOrder;
  updatedAt?: SortOrder;
  year?: SortOrder;
};

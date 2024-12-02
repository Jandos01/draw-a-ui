import { SortOrder } from "../../util/SortOrder";

export type ServiceHistoryOrderByInput = {
  carId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  serviceDate?: SortOrder;
  updatedAt?: SortOrder;
};

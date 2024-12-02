import { ServiceHistoryWhereInput } from "./ServiceHistoryWhereInput";
import { ServiceHistoryOrderByInput } from "./ServiceHistoryOrderByInput";

export type ServiceHistoryFindManyArgs = {
  where?: ServiceHistoryWhereInput;
  orderBy?: Array<ServiceHistoryOrderByInput>;
  skip?: number;
  take?: number;
};

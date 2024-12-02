import { ServiceHistory as TServiceHistory } from "../api/serviceHistory/ServiceHistory";

export const SERVICEHISTORY_TITLE_FIELD = "id";

export const ServiceHistoryTitle = (record: TServiceHistory): string => {
  return record.id?.toString() || String(record.id);
};

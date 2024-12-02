import { Manufacturer } from "../manufacturer/Manufacturer";
import { ServiceHistory } from "../serviceHistory/ServiceHistory";

export type Car = {
  color: string | null;
  createdAt: Date;
  id: string;
  manufacturer?: Manufacturer | null;
  model: string | null;
  serviceHistories?: Array<ServiceHistory>;
  updatedAt: Date;
  year: number | null;
};

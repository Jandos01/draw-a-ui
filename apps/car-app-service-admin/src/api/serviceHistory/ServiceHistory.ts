import { Car } from "../car/Car";

export type ServiceHistory = {
  car?: Car | null;
  createdAt: Date;
  description: string | null;
  id: string;
  serviceDate: Date | null;
  updatedAt: Date;
};

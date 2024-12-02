import { Car } from "../car/Car";

export type Manufacturer = {
  cars?: Array<Car>;
  country: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};

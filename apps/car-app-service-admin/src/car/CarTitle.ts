import { Car as TCar } from "../api/car/Car";

export const CAR_TITLE_FIELD = "color";

export const CarTitle = (record: TCar): string => {
  return record.color?.toString() || String(record.id);
};

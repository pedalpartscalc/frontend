export enum PartType {
  TRANSISTOR = "transistor",
  DIODE = "diode",
  RESISTOR = "resistor",
  CAPACITOR = "capacitor",
}

export const PART_TYPES = Object.values(PartType);

export interface NewAvailablePart {
  part_name: string;
  part_kind: PartType;
  quantity: number;
}

export interface AvailablePart {
  id: number;
  part_name: string;
  part_kind: PartType;
  quantity: number;
}

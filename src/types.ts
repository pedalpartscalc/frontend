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

export interface RequiredPart {
  id: number;
  pedal_id: number;
  part_name: string;
  part_kind: PartType;
  quantity: number;
}

export enum PedalKind {
  OVERDRIVE = "Overdrive",
}

export const PEDAL_KINDS = Object.values(PedalKind);

export interface Pedal {
  id: number;
  name: string;
  kind: PedalKind;
  created_at?: Date;
  updated_at?: Date;
  required_parts?: RequiredPart[];
}

export interface NewPedal {
  name: string;
  kind: PedalKind;
}

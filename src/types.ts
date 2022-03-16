export enum PartType {
  TRANSISTOR = "Transistor",
  DIODE = "Diode",
  RESISTOR = "Resistor",
  CAPACITOR = "Capacitor",
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

export interface NewRequiredPart {
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

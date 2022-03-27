import { writable, Writable } from "svelte/store";
import type { Pedal } from "./types";

export const modal = writable(null);
export const availableParts = writable([]);
export const pedals = writable([]);
export const modalPedal: Writable<Pedal | null> = writable(null);
export const deleteModalPedal: Writable<Pedal | null> = writable(null);
export const availablePedals = writable([]);
export const isAdminUser = writable(false);

import { z } from "zod";

export type TMasterFilter = {
  NamaCabang?: string;
  NamaGerbang?: string;
};

export type TGate = {
  id: number;
  IdCabang: number;
  NamaGerbang: string;
  NamaCabang: string;
};

export type TDeleteGateParams = {
  id: number;
  IdCabang: number;
};

export const TGateScheme = z.object({
  id: z.number({ coerce: true }),
  IdCabang: z.number({ coerce: true }),
  NamaGerbang: z.string(),
  NamaCabang: z.string(),
});

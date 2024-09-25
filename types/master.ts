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

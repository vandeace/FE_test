type TDataRow = {
  id: number;
  [key: string]: string | number;
};

export type TApiResponse<T extends TDataRow> = {
  status: boolean;
  message: string;
  code: number;
  data: {
    total_pages: number;
    current_page: number;
    count: number;
    rows: {
      count: number;
      rows: T[];
    };
  };
};

export type TPaginatedRequest<T> = {
  page?: number;
  filter?: T;
  limit?: number;
};

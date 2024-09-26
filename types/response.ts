export type TApiResponse<T> = {
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

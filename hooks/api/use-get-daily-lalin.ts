import axiosInstance from "@/config/api";
import { TLalin, TLalinFilter } from "@/types/lalin";
import { TApiResponse, TPaginatedRequest } from "@/types/response";
import { useQuery } from "@tanstack/react-query";

export const useGetDailyLalin = (params: TPaginatedRequest<TLalinFilter>) => {
  return useQuery<TApiResponse<TLalin>>({
    queryKey: ["get-daily-lalen", params],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/lalins`, {
        params: {
          page: params.page,
          limit: params.limit,
          ...params.filter,
        },
      });
      return data;
    },
  });
};

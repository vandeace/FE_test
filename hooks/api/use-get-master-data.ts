import axiosInstance from "@/config/api";
import { TGate, TMasterFilter } from "@/types/master";
import { TApiResponse, TPaginatedRequest } from "@/types/response";
import { useQuery } from "@tanstack/react-query";

export const useGetAllGate = (params: TPaginatedRequest<TMasterFilter>) => {
  return useQuery<TApiResponse<TGate>>({
    queryKey: ["get-all-gate", params],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/gerbangs`, {
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

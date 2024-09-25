import axiosInstance from "@/config/api";
import { TDeleteGateParams } from "@/types/master";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteGate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["delete-gate"],
    mutationFn: async (formData: TDeleteGateParams) => {
      const { data } = await axiosInstance.delete("/gerbangs", {
        data: formData,
      });
      return data;
    },
    onSettled: async () => {
      return await queryClient.invalidateQueries({
        queryKey: ["get-all-gate"],
      });
    },
  });
};

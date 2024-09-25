import axiosInstance from "@/config/api";
import { TGate } from "@/types/master";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateGate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["update-gate"],
    mutationFn: async (formData: TGate) => {
      const { data } = await axiosInstance.put("/gerbangs/", formData);
      return data;
    },
    onSettled: async () => {
      return await queryClient.invalidateQueries({
        queryKey: ["get-all-gate"],
      });
    },
  });
};

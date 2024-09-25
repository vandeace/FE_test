import axiosInstance from "@/config/api";
import { TGate } from "@/types/master";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateGate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["create-gate"],
    mutationFn: async (formData: TGate) => {
      const { data } = await axiosInstance.post("/gerbangs/", formData);
      return data;
    },
    onSettled: async () => {
      return await queryClient.invalidateQueries({
        queryKey: ["get-all-gate"],
      });
    },
  });
};

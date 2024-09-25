import { TLogin, TLoginResponse } from "@/types/login";
import axiosInstance from "@/config/api";
import { useMutation } from "@tanstack/react-query";

export const signIn = () => {
  return useMutation({
    mutationKey: ["sign-in"],
    mutationFn: async (formData: TLogin): Promise<TLoginResponse> => {
      const requestData = {
        username: formData.username,
        password: formData.password,
      };
      const { data } = await axiosInstance.post("/auth/login", requestData);
      console.log(data, "data");
      return data;
    },
  });
};

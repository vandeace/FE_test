import * as z from "zod";

export const TLoginScheme = z.object({
  username: z.string().min(2, { message: "Username Tidak Boleh Kosong" }),
  password: z.string().min(2, { message: "Password Tidak Boleh Kosong" }),
});

export type TLogin = z.infer<typeof TLoginScheme>;

export type TToken = {
  token: {
    expiresIn: string;
    token: string;
  };
};

export interface TLoginResponse {
  status: boolean;
  message: string;
  code: number;
  is_logged_in: number;
  token: string;
}

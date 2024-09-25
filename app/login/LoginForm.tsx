"use client";

import { TLogin, TLoginScheme } from "@/types/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import InputForm from "@/components/form-input/input";
import { signIn } from "@/hooks/api/login";
import { redirect, useRouter } from "next/navigation";
import { authenticate } from "../api/lib/action";

export default function LoginForm() {
  const [isError, setIsError] = useState(false);
  const router = useRouter();
  const form = useForm<TLogin>({
    reValidateMode: "onChange",
    mode: "onChange",
    resolver: zodResolver(TLoginScheme),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { control } = form;
  const { mutate } = signIn();

  const onSubmit = async (values: z.infer<typeof TLoginScheme>) => {
    setIsError(false);
    const res = await authenticate({
      username: values.username,
      password: values.password,
    });
    // mutate(values, {
    //   onSuccess(data) {
    //     if (data.token) {
    //       localStorage.setItem("token", data.token);
    //       router.push("/dashboard");
    //     }
    //   },
    // });
    if (res) {
      setIsError(true);
    }
  };

  return (
    <div className="mx-auto w-[448px] max-w-full rounded-[5px] bg-white p-6">
      <h1 className="mb-4 text-[26px] font-bold text-[#0F172A]">Login</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <InputForm name="username" control={control} label="Username" />
          <InputForm
            name="password"
            control={control}
            label="Password"
            type="password"
          />
          {isError && (
            <h5 className="text-red-500 text-sm mt-3">
              Username atau Password salah !!
            </h5>
          )}
          <div className="mt-4">
            <Button type="submit" className="mt-4 w-full">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

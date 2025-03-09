import React from "react";

/* import {
  useGetUsersSessionsMutation,
  usePostAuthOtpMutation,
  usePostUsersSignInMutation,
} from "@/src/shared/api"; */
/* import { ROUTES } from "@/src/shared/constants";
import { useUser } from "@/src/shared/context"; */
import { useForm } from "react-hook-form";
import { useAuthScreen } from "../../../context/AuthScreenContext";
import { useTimer } from "@/hooks/useTimer";
import { useAuth } from "@/contexts/Auth";
import { useRouter } from "expo-router";

export function useOtpForm() {
  const authScreenContext = useAuthScreen();
  const authContext = useAuth();
  const router = useRouter();
  const { seconds, isEnding, start } = useTimer();

  /* const postAuthOtpMutation = usePostAuthOtpMutation();
  const postPostUsersSignInMutation = usePostUsersSignInMutation();
  const getUsersSessionsMutation = useGetUsersSessionsMutation(); */

  const form = useForm({
    mode: "onChange",
    defaultValues: {
      phone: authScreenContext.value?.phone ?? "",
      otp: "",
    },
  });

  const onSubmit = async (data: { phone: string; otp: string }) => {
    const phone = data.phone
      .split("")
      .filter((char) => char !== " ")
      .join("");
    authContext.signIn();
    router.replace("/(tabs)");
    /* const response = await postPostUsersSignInMutation.mutateAsync({
      params: { code: Number(data.otp), phone },
    });
    if (response.data.success) {
      setCookie("token", response.data.token);
      const userResponse = await getUsersSessionsMutation.mutateAsync({});
      if (userResponse.data.success) {
        userContext.set(userResponse.data.user);
        router.push(ROUTES.PIZZA);
        router.refresh();
      }
    } */
  };

  const handleGetOtp = async () => {
    /* const response = await postAuthOtpMutation.mutateAsync({
      params: { phone: authContext.value?.phone ?? "" },
    }); */
    start(Math.ceil(1));
  };

  React.useEffect(() => {
    handleGetOtp();
  }, []);

  /* const registerWithMask = useHookFormMask(form.register) */

  return {
    state: {
      form: form,
      seconds,
      isEnding,
    },
    functions: {
      onSubmit,
      handleGetOtp,
    },
  };
}

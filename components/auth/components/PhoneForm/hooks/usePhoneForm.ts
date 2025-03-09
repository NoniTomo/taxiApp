import { useForm } from "react-hook-form";
/* import { useHookFormMask } from 'use-mask-input'
 */ import { useAuthScreen } from "../../../context/AuthScreenContext";
import { useStage } from "../../../context/StageContext";

export function usePhoneForm() {
  const authScreenContext = useAuthScreen();
  const { set } = useStage();

  const form = useForm({
    mode: "onChange",
    defaultValues: {
      phone: authScreenContext.value?.phone ?? "",
    },
  });

  const onSubmit = (data: { phone: string }) => {
    const phone = data.phone
      .split("")
      .filter((char) => char !== " ")
      .join("");
    authScreenContext.set(phone);
    set("otpForm");
  };

  return {
    state: { form: { ...form } },
    functions: { onSubmit },
  };
}

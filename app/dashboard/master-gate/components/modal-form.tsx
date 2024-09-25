import InputForm from "@/components/form-input/input";
import { Button } from "@/components/ui/button";
import { useCreateGate } from "@/hooks/api/use-create-master-data";
import { useUpdateGate } from "@/hooks/api/use-update-master-data";
import { TGate, TGateScheme } from "@/types/master";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface TModalForm {
  data?: TGate;
  handleClose: () => void;
}
const ModalForm = ({ data, handleClose }: TModalForm) => {
  const formMethods = useForm<TGate>({
    defaultValues: {
      ...data,
    },
    reValidateMode: "onChange",
    mode: "onChange",
    resolver: zodResolver(TGateScheme),
  });

  const { handleSubmit, reset, control } = formMethods;

  const onSuccessHandle = () => {
    reset();
    handleClose();
    toast.success(`Success ${!!data ? "Update" : "Create"} Data`, {
      position: "top-center",
    });
  };
  const onErrorHandle = () => {
    toast.error(`Fail ${!!data ? "Update" : "Create"} Data`, {
      position: "top-center",
    });
  };

  const { mutate: mutateUpdate } = useUpdateGate();
  const { mutate: mutateCreate } = useCreateGate();

  const onSubmit = handleSubmit(formData => {
    if (!!data) {
      mutateUpdate(formData, {
        onSuccess: onSuccessHandle,
        onError: onErrorHandle,
      });
    } else {
      mutateCreate(formData, {
        onSuccess: onSuccessHandle,
        onError: onErrorHandle,
      });
    }
  });

  return (
    <div>
      <div className="">
        <FormProvider {...formMethods}>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-4">
              <InputForm
                control={control}
                name="id"
                label="Id Ruas"
                placeholder="Masukkan ID Ruas"
              />
              <InputForm
                control={control}
                name="IdCabang"
                label="Id Cabang"
                placeholder="Masukkan ID Cabang"
              />
              <InputForm
                control={control}
                name="NamaGerbang"
                label="Nama Gerbang"
                placeholder="Masukkan Nama Gerbang"
              />
              <InputForm
                control={control}
                name="NamaCabang"
                label="Nama Cabang"
                placeholder="Masukkan Nama Cabang"
              />
            </div>
            <div className="p-4 flex justify-around mt-4 gap-x-4">
              <Button size="lg" variant="destructive" type="button" onClick={handleClose}>
                Batal
              </Button>
              <Button size="lg" type="submit">
                Simpan
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default ModalForm;

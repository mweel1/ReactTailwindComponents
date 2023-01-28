import AvatarImage from "@/components/AvatarImage";
import { useForm, Controller } from "react-hook-form";
import TextArea from "@/components/Form/TextArea";
import ClickButton from "@/components/ClickButton";
export default function AddNote() {
  const {
    control,
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });
  return (
    <>
      <div className="flex flex-row gap-2">
        <div>
          <AvatarImage />
        </div>
        <div className="w-full">
          <TextArea
            name="note"
            register={register}
            errors={errors}
            placeholder="Enter Note..."
          />
          <ClickButton className="mt-3 mb-3 pb-2 block w-full max-w-xl">
            Add Note
          </ClickButton>
        </div>
      </div>
    </>
  );
}

import TextBox from "./TextBox";
import Label from "./Label";
import StatesSelect from "./StatesSelect";
import { useFormContext, Controller } from "react-hook-form";

export default function Address() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <>
        <Label>Address</Label>
        <TextBox name="address1" required={false} />
        <div className="pt-1">
          <TextBox required={false} name="address2" />
        </div>
        <Label className="pt-3">City </Label>
        <TextBox required={false} name="city" />

        <div className="grid grid-cols-3 gap-x-3">
          <div className="col-span-1">
            <Label className="pt-3">State</Label>

            <Controller
              name="state"
              control={control}
              rules={{ required: false }}
              render={({ field }) => <StatesSelect {...field} />}
            />
          </div>
          <div className="col-span-2">
            <Label className="pt-3">Zip Code</Label>
            <TextBox name="zipCode" required={false} />
          </div>
        </div>
      </>
    </>
  );
}

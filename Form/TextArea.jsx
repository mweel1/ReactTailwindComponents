import { useEffect, useState } from "react";
import ValidationError from "./ValidationError";
import { useFormContext, useController } from "react-hook-form";

export default function TextArea({
  label,

  name,
  required = true,
  minLength = null,
  placeholder = "",
  rows = 3,
}) {
  var validate = {};
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <textarea
        placeholder={placeholder}
        id={name}
        name={name}
        {...register(name, { required: required })}
        rows={rows}
        className="block w-full max-w-xl rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-indigo-500 sm:text-sm"
        aria-invalid={errors[name] ? "true" : "false"}
      />

      <ValidationError name={name} errors={errors} minLength={minLength} />
    </>
  );
}

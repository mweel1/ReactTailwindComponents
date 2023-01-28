import { useEffect, useState } from "react";
import ValidationError from "./ValidationError";

import { useFormContext, useController } from "react-hook-form";

export default function TextBox({
  className = "",
  required = true,
  minLength = null,
  name = null,
  checkEmail = false,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  var validate = {};
  if (checkEmail)
    validate["checkEmail"] = (value) => {
      // regex to check valid email address from value
      let validEmail = String(value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      if (!validEmail) return false;
      else "You must enter a valid e-mail address";
      return null;
    };

  return (
    <>
      <input
        type="text"
        {...register(name, {
          required,
          minLength,
          validate,
        })}
        name={name}
        className={`block w-full max-w-xl rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm ${className}`}
      />

      <ValidationError
        errors={errors}
        name={name}
        minLength={minLength}
        checkEmail={checkEmail}
      />
    </>
  );
}

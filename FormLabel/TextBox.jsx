import { useEffect, useState } from "react";

import TextBox from "../Form/TextBox";

export default function TextBoxLabel({
  label,
  register,
  errors,
  name = null,
  required = true,
  minLength = null,
  checkEmail = false,
}) {
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
      <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5 pb-4">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          {label}
        </label>
        <div className="mt-1 sm:col-span-2 sm:mt-0 ">
          <TextBox
            name={name}
            register={register}
            errors={errors}
            label={label}
            validate={validate}
            minLength={minLength}
            checkEmail={checkEmail}
          />
        </div>
      </div>
    </>
  );
}

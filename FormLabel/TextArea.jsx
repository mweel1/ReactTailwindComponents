import { useEffect, useState } from "react";

import TextArea from "../Form/TextArea";

export default function TextBoxLabel({
  label,
  register,
  errors,
  name = null,
  required = true,
  minLength = null,
  rows = 3,
}) {
  var validate = {};

  return (
    <>
      <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
        <label
          htmlFor={label}
          className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          {label}
        </label>
        <div className="mt-1 sm:col-span-2 sm:mt-0 ">
          <TextArea
            name={name}
            label={label}
            validate={validate}
            rows={rows}
            minLength={minLength}
          />
        </div>
      </div>
    </>
  );
}

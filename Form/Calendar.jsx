import { useFormContext, Controller } from "react-hook-form";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import ValidationError from "@/components/Form/ValidationError";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ items, value, name, required = true }) {
  const {
    methods,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ required: required }}
        render={({ field }) => (
          <>
            {field.value && (
              <Calendar
                name={name}
                onChange={(e) => {
                  field.onChange(e);
                }}
                value={new Date(field.value)}
              />
            )}
            <ValidationError name={name} errors={errors} />
          </>
        )}
      />
    </>
  );
}

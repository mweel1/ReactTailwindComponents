import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useEffect } from "react";
import {
  ChartBarIcon,
  CheckCircleIcon,
  CursorArrowRaysIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ children, openStatus }) {
  return (
    <Popover className="relative z-0">
      {({ open }) => (
        <>
          <div className="relative z-10 bg-white shadow"></div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
            show={true}
          >
            <Popover.Panel
              static
              className="absolute inset-x-0 z-10 transform shadow-lg"
            >
              <div className="bg-white">
                <div className="mx-auto grid max-w-7xl gap-y-6 p-6 sm:grid-cols-2 sm:gap-8 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                  {children}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

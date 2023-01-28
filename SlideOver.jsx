import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function SlideOver({
  open = false,
  opened,
  title,
  description = null,
  children,
  large = false,
  titleBgColor = "bg-black",
  size = "max-w-[500px]",
}) {
  const [myOpen, setMyOpen] = useState(true);

  useEffect(() => {
    setMyOpen(open);

    // if function
    if (typeof opened === "function") opened(open);
  }, [open]);

  useEffect(() => {
    // if function
    if (typeof opened === "function") opened(myOpen);
  }, [myOpen]);

  return (
    <Transition.Root show={myOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setMyOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={`pointer-events-none fixed inset-y-0 right-0 flex  ${size}`}
            >
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-full">
                  <div className="flex h-full flex-col overflow-y-scroll bg-gray-100 shadow-2xl">
                    <div className={`${titleBgColor} py-6 px-4 sm:px-6`}>
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-lg font-medium text-white">
                          {title}
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-black text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                            onClick={() => setMyOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      {description && (
                        <div className="mt-1">
                          <p className="text-sm text-indigo-300">
                            {description}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="relative w-full py-6 px-4 sm:px-6">
                      {children}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

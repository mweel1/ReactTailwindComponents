import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SimpleCard({ card, clicked, bgColor }) {
  let [myCard, setMyCard] = useState(card);

  useEffect(() => {
    setMyCard(card);
  }, [card]);

  return (
    <div>
      <div className="mt-3 grid grid-cols-1 max-w-xl">
        <div className="col-span-1 flex rounded-md shadow-sm">
          <div
            className={`flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md ${bgColor}`}
          >
            {myCard.initials}
          </div>
          <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
            <div className="flex-1 truncate px-4 py-2 text-sm">
              <a className="font-medium text-gray-900 hover:text-gray-600">
                {myCard.name}
              </a>
              <p className="text-gray-500">{myCard.description}</p>
            </div>
            <div className="flex-shrink-0 pr-2">
              <button
                onClick={() => {
                  if (clicked) {
                    clicked(myCard);
                  }
                }}
                type="button"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">Open options</span>
                <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

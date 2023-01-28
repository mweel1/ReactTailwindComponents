import SlideOver from "./SlideOver";
import ClickButton from "./ClickButton";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import LongDate from "./Format/LongDate";
import DaysOld from "./Format/DaysOld";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { useState, useRef } from "react";
export default function MyCalendar({ value, onChange = () => {} }) {
  const [myOpen, setMyOpen] = useState(false);
  const [myDate, setMyDate] = useState(value);

  return (
    <>
      {
        <>
          <div>
            <div className="mt-3 grid grid-cols-1 max-w-full">
              <div className="col-span-1 flex rounded-md shadow-sm">
                <div className="flex flex-1 max-w-full items-center justify-between border truncate rounded border-gray-200 bg-white">
                  <div className="flex-1 truncate px-4 py-2 m-1 text-sm">
                    <a className="font-medium text-gray-900 hover:text-gray-600">
                      {myDate && <LongDate date={myDate.toString()}></LongDate>}
                      {!myDate && <div>Select Date...</div>}
                    </a>
                  </div>
                  <div className="flex-shrink-0 pr-2">
                    <button
                      onClick={() => {
                        setMyOpen(true);
                      }}
                      type="button"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="sr-only">Open options</span>
                      <EllipsisVerticalIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      }

      {myOpen && (
        <SlideOver
          open={myOpen}
          opened={(open) => setMyOpen(open)}
          title="Select Date"
        >
          <div className="grid grid-cols-1 content-center w-full">
            <Calendar
              onChange={(d) => {
                onChange(d);
                setMyDate(d);
                setMyOpen(false);
              }}
              value={value}
            />
          </div>
        </SlideOver>
      )}
    </>
  );
}

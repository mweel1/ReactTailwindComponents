import { PlusIcon } from "@heroicons/react/20/solid";
import HRefButton from "./HRefButton";
import ClickButton from "./ClickButton";
import { useNavigate } from "react-router-dom";
export default function NoData({
  title,
  description,
  buttonAction,
  path,
  clicked,
  showIcon = true,
}) {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div className="min-h-full bg-white py-16 px-6 sm:py-24 md:grid md:place-items-center lg:px-8 rounded-xl">
          <div className="mx-auto max-w-max">
            <main className="sm:flex">
              <p className="text-4xl font-bold tracking-tight text-red-200 sm:text-5xl">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    vectorEffect="non-scaling-stroke"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                  />
                </svg>
              </p>
              <div className="sm:ml-6">
                <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-xl">
                    {title}
                  </h1>
                  <p className="mt-1 text-base text-gray-500 sm:text-sm w-[250px]">
                    {description}
                  </p>
                </div>
                <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6 ">
                  <ClickButton
                    clicked={() => {
                      if (path) navigate(path);
                      if (clicked) clicked();
                    }}
                  >
                    {buttonAction}
                  </ClickButton>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

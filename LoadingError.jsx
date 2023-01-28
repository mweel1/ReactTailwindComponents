import { useEffect, useState, Suspense } from "react";
import ClickButton from "@/components/ClickButton";
import NoData from "@/components/NoData";
import Spinner from "@/components/Spinner";

import "./LoadingError.css";

export default function LoadingError({
  loading,
  error,
  children,
  refetch,
  title,
  data,
  noData,
}) {
  const [myError, setMyError] = useState(error);
  const [myLoading, setMyLoading] = useState(null);
  const [myData, setMyData] = useState(data);

  useEffect(() => {
    console.log("error");
    setMyError(error);
  }, [error]);

  useEffect(() => {
    setMyLoading(loading);
  }, [loading]);

  useEffect(() => {
    setMyData(data);
  }, [data]);

  const Error = () => {
    return (
      <div>
        <div className="min-h-full bg-white py-16 px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
          <div className="mx-auto max-w-max">
            <main className="sm:flex">
              <p className="text-4xl font-bold tracking-tight text-red-200 sm:text-5xl">
                500
              </p>
              <div className="sm:ml-6">
                <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Error
                  </h1>
                  <p className="mt-1 text-base text-gray-500">
                    {myError.message}
                  </p>
                </div>
                <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                  <ClickButton
                    className="w-full"
                    clicked={() => {
                      refetch();
                    }}
                  >
                    Dashboard
                  </ClickButton>
                  <ClickButton
                    className="w-full"
                    clicked={() => {
                      refetch();
                    }}
                  >
                    Try Again
                  </ClickButton>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  };

  const Loading = () => {
    return (
      <div className="DelayedSpinner">
        <div className="min-h-full bg-white py-16 px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
          <div className="mx-auto max-w-max">
            <main className="sm:flex">
              <p className="text-4xl font-bold tracking-tight text-red-200 sm:text-5xl">
                <Spinner />
              </p>
              <div className="sm:ml-6">
                <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    {title}
                  </h1>
                  <p className="mt-1 text-base text-gray-500">Loading . . .</p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  };

  const LoadingErrorState = () => {
    if (myLoading == null) return "";
    if (myLoading == true) return <Loading />;
    if (myError) return <Error />;

    if (
      myData &&
      myData.isSuccess &&
      "items" in myData.value &&
      myData.value.items.length === 0
    )
      return <NoData {...noData} />;

    if (myData && myData.isSuccess) return children;

    return <></>;
  };

  return (
    <>
      <LoadingErrorState />
    </>
  );
}

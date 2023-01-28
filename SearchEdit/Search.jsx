import { useEffect, useState } from "react";
import SearchResults from "./SearchResults";
import { useLazyAxios } from "use-axios-client";
import { useAxiosInstance } from "@/providers/axios";
import SearchBar from "./SearchBar";
import LoadingError from "@/components/LoadingError";

export default function Search({
  selected,
  edit,
  create,
  url,
  noDataTitle,
  noDataDescription,
  noDataButtonAction,
  searchCard,
}) {
  const [mySearchTerm, setMySearchTerm] = useState(null);

  const { instance } = useAxiosInstance();

  const [getData, { data, error, loading, refetch }] = useLazyAxios({
    axiosInstance: instance,
    url: url,
    params: {
      searchTerm: mySearchTerm,
    },
  });

  useEffect(() => {
    if (mySearchTerm) getData();
  }, [mySearchTerm]);

  return (
    <div>
      <SearchBar
        debounced={(search) => {
          setMySearchTerm(search);
        }}
      />

      <div className="mt-4">
        {mySearchTerm && (
          <LoadingError
            loading={loading}
            error={error}
            refetch={refetch}
            data={data}
            title="Error"
            noData={{
              title: noDataTitle,
              description: noDataDescription,
              buttonAction: noDataButtonAction,
              clicked: () => {
                create();
              },
            }}
          >
            <div className="w-full flex justify-end -mt-3 mb-3">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  create();
                }}
              >
                Create New Company
              </a>
            </div>
            {data && data.value.items.length > 1 && (
              <SearchResults
                selected={(card) => {
                  selected(card);
                }}
                data={data.value.items}
                edit={(card) => {
                  if (edit) edit(card);
                }}
              />
            )}
          </LoadingError>
        )}
      </div>
    </div>
  );
}

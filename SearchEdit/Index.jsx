import React, { useEffect, useState } from "react";
import SlideOver from "../SlideOver";
import ClickButton from "../ClickButton";
import Search from "./Search";
import { SearchEditContext } from "@/components/SearchEdit/SearchEditContext";
export default function SearchEdit({
  value = null,
  onChange = () => {},
  title = null,
  size = "max-w-[500px]",
  description = null,
  noDataTitle,
  noDataDescription,
  noDataButtonAction,
  url, // the url where you want to search
  CreateComponent: CreateComponent = () => <></>,
  EditComponent: EditComponent = () => <></>,
}) {
  const { status, itemSelected, setStatus } =
    React.useContext(SearchEditContext);

  let [myCard, setMyCard] = useState(value);
  let [myStatus, setMyStatus] = useState(status);

  useEffect(() => {
    setMyStatus(status);
  }, [status]);

  useEffect(() => {
    onChange(value);
    setMyCard(value);
  }, [value]);

  return (
    <>
      {(myStatus === "edit" || myStatus == "search" || myStatus == "create") &&
        myStatus != "idle" && (
          <SlideOver
            size={size}
            title={myStatus === "edit" ? "Edit " + title : "Search " + title}
            open={true}
            opened={(open) => {
              console.log(open);
              if (!open) {
                setStatus("idle");
              }
            }}
          >
            {myStatus === "edit" && <EditComponent />}
            {myStatus === "create" && (
              <CreateComponent
                created={(card) => {
                  alert(card);
                  setStatus("idle");
                  itemSelected(card);
                }}
              />
            )}
            {myStatus === "search" && (
              <Search
                noDataTitle={noDataTitle}
                noDataDescription={noDataDescription}
                noDataButtonAction={noDataButtonAction}
                description={description}
                url={url}
                selected={(card) => {
                  itemSelected(card);
                  setStatus("idle");
                  if (onChange) onChange(card);
                }}
                edit={(card) => {
                  alert("did we make it");
                  itemSelected(card);
                  setStatus("edit");
                }}
                create={(card) => {
                  itemSelected(null);
                  setStatus("create");
                }}
              />
            )}
          </SlideOver>
        )}
    </>
  );
}

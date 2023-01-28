import SimpleCard from "../SimpleCard";
import { SearchEditContext } from "./SearchEditContext";
import ClickButton from "@/components/ClickButton";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

import { useEffect, useState, useContext } from "react";

export default function Idle({ onChange, value }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { item, status, idleSelected, setStatus } =
    useContext(SearchEditContext);

  const [myCard, setMyCard] = useState(item);
  const [myStatus, setMyStatus] = useState(status);

  useEffect(() => {
    setMyStatus(status);
  }, [status]);

  useEffect(() => {
    onChange(item);
    setMyCard(item);
  }, [item]);

  useEffect(() => {
    onChange(value);
    setMyCard(value);
  }, [value]);

  return (
    <>
      {!myCard && myStatus == "search" && <div>Select Company..</div>}
      {!myCard && myStatus == "idle" && (
        <div className="">
          <ClickButton
            clicked={() => {
              setStatus("search");
            }}
          >
            Select Company
          </ClickButton>
        </div>
      )}
      {myCard && (
        <SimpleCard
          bgColor="bg-blue-400"
          card={myCard}
          clicked={(myCard) => {
            //if clicked
            if (idleSelected) {
              idleSelected(myCard);
            }
          }}
        />
      )}
    </>
  );
}

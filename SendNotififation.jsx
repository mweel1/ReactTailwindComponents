import Card from "@/components/Card";
import Label from "@/components/Form/Label";
import TextBox from "@/components/Form/TextBox";
import TextArea from "@/components/Form/TextArea";
import Checkboxes from "@/components/Form/Checkboxes";
import ClickButton from "@/components/ClickButton";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import TabButton from "@/components/TabButton";
import AvatarList from "@/components/AvatarSelection/List";

import Slider from "@/components/Slider";

const avatars = [
  {
    id: 1,
    title: "Leslie Alexander",
    description: "leslie.alexander@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    title: "Leslie Alexander",
    description: "leslie.alexander@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    title: "Leslie Alexander",
    description: "leslie.alexander@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 4,
    title: "Leslie Alexander",
    description: "leslie.alexander@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function GeneralInfo() {
  const {
    control,
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { resourceSelection: [1, 2], bidDate: new Date() },
  });
  const [myAvatars, setMyAvatars] = useState([]);
  return (
    <>
      <div className="pb-3">
        <AvatarList
          avatars={avatars}
          selected={[]}
          changed={(selected) => {
            setMyAvatars(selected);
          }}
        />
      </div>
    </>
  );
}

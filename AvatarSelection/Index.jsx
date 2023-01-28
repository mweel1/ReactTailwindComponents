import { useEffect, useState } from "react";
import SlideOver from "../SlideOver";
import List from "./List";
import ClickButton from "../ClickButton";
export default function AvatarSelection({
  title = "No Tile",
  onChange = () => {},
  value = null,
  open,
  avatars,
}) {
  const [myOpen, setMyOpen] = useState(false);
  const [mySelected, setMySelected] = useState(value);

  useEffect(() => {
    setMyOpen(open);
  }, [open]);

  return (
    <>
      <div>
        {myOpen && (
          <SlideOver
            title={title}
            open={myOpen}
            opened={(open) => {
              setMyOpen(open);
            }}
          >
            <List
              avatars={avatars}
              selected={mySelected}
              changed={(selected) => {
                setMySelected(selected);
                onChange(mySelected);
              }}
            />
          </SlideOver>
        )}
      </div>
      {mySelected && mySelected.length == 0 && myOpen && (
        <div className="text-gray-300">Select Avatar..</div>
      )}
      {mySelected && mySelected.length == 0 && !myOpen && (
        <ClickButton
          clicked={() => {
            setMyOpen(true);
          }}
        >
          Select...
        </ClickButton>
      )}
      {mySelected.length > 0 && (
        <div
          className="flex -space-x-2 cursor-pointer"
          onClick={() => {
            setMyOpen(true);
          }}
        >
          {mySelected.map((id) => {
            let avatar = avatars.find((avatar) => avatar.id == id);
            return (
              <img
                key={id}
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src={avatar.imageUrl}
                alt=""
              />
            );
          })}
        </div>
      )}
    </>
  );
}

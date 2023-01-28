import { useState, useEffect } from "react";

export default function List({ avatars, selected, changed }) {
  const [selectedAvatars, setSelectedAvatars] = useState(selected);
  const [myAvatars, setMyAvatars] = useState(avatars);

  useEffect(() => {
    selectAvatars(selectedAvatars);
    changed(selectedAvatars);
  }, [selectedAvatars]);

  const selectAvatars = (selectedAvatars) => {
    if (!selectedAvatars || selectedAvatars.length == 0) {
      setMyAvatars(
        avatars.map((avatar) => {
          avatar.selected = false;
          return avatar;
        })
      );
    }
    if (selectedAvatars && selectedAvatars.length > 0 && myAvatars) {
      let newAvatars = myAvatars.map((avatar) => {
        if (selectedAvatars.includes(avatar.id)) {
          avatar.selected = true;
        } else {
          avatar.selected = false;
        }
        return avatar;
      });
      setMyAvatars(newAvatars);
    }
  };

  return (
    <div className="">
      {myAvatars.map((avatar) => (
        <div
          key={avatar.id}
          onClick={(e) => {
            e.preventDefault();
            // push the id onto selected array
            var newSelected;
            if (!avatar.selected) {
              newSelected = [...selectedAvatars, avatar.id];
              setSelectedAvatars(newSelected);
            } else {
              newSelected = selectedAvatars.filter((id) => id != avatar.id);
              setSelectedAvatars(newSelected);
            }

            // changed(newSelected);
          }}
          className={`mt-4 relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-gray-400 ${
            avatar.selected ? "ring" : ""
          }`}
        >
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src={avatar.imageUrl}
              alt=""
            />
          </div>
          <div className="min-w-0 flex-1">
            <a href="#" className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900">
                {avatar.title}
              </p>
              <p className="truncate text-sm text-gray-500">
                {avatar.description}
              </p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

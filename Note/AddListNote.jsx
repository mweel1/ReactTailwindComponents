import HeaderDescription from "@/components/HeaderDescription";
import NoteList from "@/components/Note/List";
import AddNote from "@/components/Note/AddNote";

export default function AddListNote() {
  return (
    <>
      {" "}
      <HeaderDescription
        className="pb-3"
        header="Notes"
        description="Below are the notes realated to this photo"
      />
      <div class="pb-4">
        <hr />
      </div>
      <div class="pb-4">
        <AddNote />
      </div>
      <hr />
      <NoteList />
    </>
  );
}

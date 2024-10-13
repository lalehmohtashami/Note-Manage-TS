import { useState } from "react";
import { useNotesDispatch } from "./NotesContext";

export const AddNote = () => {
  const [text, setText] = useState<string>("");
  const dispatch = useNotesDispatch();
  return (
    <div className="mb-4">
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Add note..."
        className="p-2 w-4/12 rounded-md mr-2"
      />
      <button
        className="bg-green-700 text-white p-2 mr-1 rounded-md w-2/12"
        onClick={() => {
          setText("");
          dispatch({
            id: newId++,
            text: text,
            type: "added",
          });
        }}
      >
        Add
      </button>
    </div>
  );
};
let newId = 3;

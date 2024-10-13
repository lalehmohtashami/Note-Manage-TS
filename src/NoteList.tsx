import { useState } from "react";
import { useNotes, useNotesDispatch } from "./NotesContext";
import { INote } from "./types/note.type";

export const NoteList = () => {
  const notes = useNotes();
  return (
    <>
      <ul>
        {notes.map((item: INote) => {
          return (
            <li key={item.id} className="mb-2">
              <Note item={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

interface NoteProps {
  item: INote;
}

const Note: React.FC<NoteProps> = ({ item }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useNotesDispatch();

  return (
    <>
      <input
        type="checkbox"
        className="mr-2"
        checked={item.done}
        onChange={(e) => {
          dispatch({
            type: "changed",
            note: {
              ...item,
              done: e.target.checked,
            },
          });
        }}
      />
      {isEditing && (
        <>
          <input
            type="text"
            value={item.text}
            className="p-2 w-4/12 rounded-md mr-2"
            onChange={(el) => {
              dispatch({
                type: "changed",
                note: {
                  ...item,
                  text: el.target.value,
                },
              });
            }}
          />
          <button
            onClick={() => setIsEditing(false)}
            className="bg-green-600 text-white p-2 mr-1 rounded-md w-2/12"
          >
            Save
          </button>
        </>
      )}
      {!isEditing && (
        <>
          <span className="p-2 w-4/12 rounded-md mr-2">{item.text}</span>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-green-600 text-white p-2 mr-1 rounded-md w-2/12"
          >
            Edit
          </button>
        </>
      )}
      <button
        onClick={() => {
          dispatch({
            type: "deleted",
            id: item.id,
          });
        }}
        className="bg-green-600 text-white p-2 rounded-md w-2/12"
      >
        Delete
      </button>
    </>
  );
};

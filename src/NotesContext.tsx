import { createContext, useContext, useReducer } from "react";
import { IAction } from "./types/Action.type";
import { TChildren } from "./types/Children.type";
import { INote } from "./types/note.type";

const NotesContext = createContext(null);
const NotesDispatchContext = createContext(null);

export const NotesProvider: React.FC<TChildren> = ({ children }) => {
  const [notes, dispatch] = useReducer(notesReducer, initialNotes);
  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
};
export const useNotes = () => {
  return useContext(NotesContext);
};
export const useNotesDispatch = () => {
  return useContext(NotesDispatchContext);
};
const notesReducer = (notes: INote[], action: IAction) => {
  switch (action.type) {
    case "added": {
      return [
        ...notes,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return notes.map((e) => {
        if (e.id === action.note.id) {
          return action.note;
        } else return e;
      });
    }
    case "deleted": {
      return notes.filter((e) => e.id !== action.id);
    }
    default: {
      throw Error("unknown action " + action.type);
    }
  }
};
const initialNotes = [
  { id: 0, text: "Philosopher's Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];

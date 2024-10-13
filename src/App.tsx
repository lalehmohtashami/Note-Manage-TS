import { AddNote } from "./AddNote";
import "./App.css";
import { NoteList } from "./NoteList";
import { NotesProvider } from "./NotesContext";

function App() {
  return (
    <div className="container flex justify-center">
      <div className="w-9/12 bg-emerald-100 p-16 rounded-xl">
        <NotesProvider>
          <h1 className="text-4xl mb-10">Note Manager</h1>
          <AddNote/>
          <NoteList />
        </NotesProvider>
      </div>
    </div>
  );
}

export default App;

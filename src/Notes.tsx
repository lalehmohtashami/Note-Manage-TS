import { useState } from "react";

export const Notes = () => {
  interface INotes {
    text: string;
    id: number;
    isReadOnly: boolean;
  }
  const [input, setInput] = useState<string>("");
  const [notes, setNotes] = useState<INotes[]>([]);

  const handleAdd = () => {
    setNotes([...notes, { text: input, id: Date.now(), isReadOnly: true }]);
    setInput("");
  };
  const handleEdit = (item: INotes) => {
    setNotes(
      notes.map((e) => {
        if (e.id === item.id) {
          return { ...e, isReadOnly: true };
        }
        return e;
      })
    );
  };
  const handleDelete = (item: INotes) => {
    setNotes(notes.filter(e => e.id !== item.id))
  }
  return (
    <>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className="p-1 mr-2 border border-black rounded-md w-6/12 mb-10"
      />
      <button onClick={handleAdd} className="bg-green-800 text-white p-1.5 w-2/12 rounded-md">+ Add</button>
      <ul>
        {notes.map((item) => {
          return (
            <li key={item.id} className='mb-2'>
              <input
                value={item.text}
                readOnly={item.isReadOnly}
                className="p-2 w-4/12 rounded-md"
                style={{ border: item.isReadOnly ? 'none' : '1px solid #000', background: item.isReadOnly ? 'none': '#eee' }}
                onClick={() => setNotes(notes.map((el) => {
                    if (el.id === item.id) {
                        return {...el, isReadOnly: false}
                    }
                    return el;
                }))}
                onChange={(el) => {
                  setNotes(
                    notes.map((e) => {
                      if (e.id === item.id) {
                        return { ...e, text: el.target.value };
                      }
                      return e;
                    })
                  );
                }}
              />
              <button onClick={() => handleEdit(item)} className="bg-green-700 text-white p-2 mr-1 rounded-md w-2/12">Edit</button>
              <button onClick={() => handleDelete(item)} className="bg-green-700 text-white p-2 rounded-md w-2/12">Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

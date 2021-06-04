import SingleNote from "./SingleNote";

type Note = {
  canvas_message: string;
  created_at: string;
  updated_at: string;
  about_name: string;
  id: number;
};

interface NotesProps {
  notes: Array<Note>;
}

function Notes({ notes }: NotesProps) {
  if (notes) {
    return (
      <div>
        <div className="flow-root">
          <ul className="divide-y divide-gray-200">
            {notes.map((note) => (
              <li key={note.id}>
                <SingleNote
                  canvas_message={note.canvas_message}
                  about_name={note.about_name}
                  id={note.id}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  return null;
}

export default Notes;

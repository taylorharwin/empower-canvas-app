import Note from "./Note";

function Notes({ notes }) {
  if (notes) {
    return (
      <div>
        {notes.map((note) => (
          <div key={note.id} className="py-2">
            <Note
              id={note.id}
              updated_at={note.updated_at}
              created_at={note.created_at}
              canvas_message={note.canvas_message}
              about_name={note.about_name}
            />
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}

export default Notes;

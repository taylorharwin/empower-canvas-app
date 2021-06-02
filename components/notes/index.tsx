import Note from "./Note";

function Notes({ notes }) {
  if (notes) {
    return (
      <div>
        <div className="flow-root">
          <ul className="divide-y divide-gray-200">
            {notes.map((note) => (
              <li key={note.id}>
                <Note
                  canvas_message={note.canvas_message}
                  about_name={note.about_name}
                  id={note.id}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <a
            href="#"
            className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            View all
          </a>
        </div>
      </div>
    );
  }
  return null;
}

export default Notes;

import { useState } from "react";
import Link from "next/link";
import { mutate } from "swr";

import ButtonLink from "@/components/button-link";
import Button from "@/components/button";

function Note({ id, about_name, canvas_message }) {
  const [deleting, setDeleting] = useState(false);

  async function deleteEntry() {
    setDeleting(true);
    let res = await fetch(`/api/delete-note?id=${id}`, { method: "DELETE" });
    let json = await res.json();
    if (!res.ok) throw Error(json.message);
    mutate("/api/get-notes");
    setDeleting(false);
  }
  return (
    <div>
      <div className="flex items-center">
        <Link href={`/note/${id}`}>
          <a className="font-bold py-2">Edit</a>
        </Link>
        <div className="flex ml-4">
          <Button
            disabled={deleting}
            onClick={deleteEntry}
            className="h-5 py-0 mx-1"
          >
            {deleting ? "Deleting ..." : "Delete"}
          </Button>
        </div>
      </div>
      <p>{about_name}</p>
      <p>{canvas_message}</p>
    </div>
  );
}

export default Note;

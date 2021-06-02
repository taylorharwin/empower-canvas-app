import { useState } from "react";
import Link from "next/link";
import { mutate } from "swr";

import ButtonLink from "@/components/button-link";
import Button from "@/components/button";
import { PencilIcon } from "@heroicons/react/solid";
import { TrashIcon } from "@heroicons/react/solid";

export default function Note({ id, about_name, canvas_message }) {
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
    <div className="flex flex-col">
      <div className="w-1/4 flex flex-row items-center">
        <Link href={`/note/${id}`}>
          <PencilIcon className="cursor-pointer hover:text-blue-800 h-5 w-5 text-blue-500" />
        </Link>

        <Button
          disabled={deleting}
          onClick={deleteEntry}
          className="h-5 py-0 mx-1"
        >
          {deleting ? "Deleting ..." : "Delete"}
        </Button>
      </div>
      <div className="w-1/4">
        <h3 className="text-xl font-bold mb-4">{about_name}</h3>
      </div>
      <div className="text-md">{canvas_message}</div>
    </div>
  );
}

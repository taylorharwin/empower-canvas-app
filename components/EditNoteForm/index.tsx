import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { mutate } from "swr";

import Button from "@/components/Button";

export default function EditNoteForm({ canvas_message, id, about_name }) {
  const [aboutName, setAboutName] = useState(about_name);
  const [canvasMessage, setCanvasMessage] = useState(canvas_message);
  const [submitting, setSubmitting] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setAboutName(about_name);
    setCanvasMessage(canvas_message);
  }, [canvas_message, about_name]);

  async function deleteNote() {
    setDeleting(true);
    let res = await fetch(`/api/delete-note?id=${id}`, { method: "DELETE" });
    let json = await res.json();
    if (!res.ok) throw Error(json.message);
    Router.push("/");
    mutate("/api/get-notes");
    setDeleting(false);
  }

  const router = useRouter();

  async function handleEdit(e) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/edit-note", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          about_name: aboutName,
          canvas_message: canvasMessage,
        }),
      });
      const json = await res.json();
      setSubmitting(false);
      mutate("/api/edit-note");
      if (!res.ok) throw Error(json.message);
      Router.push("/");
    } catch (e) {
      throw Error(e.message);
    }
  }

  return (
    <>
      <div className="my-4">
        <label htmlFor="aboutName">
          <h3 className="font-bold">A note about...</h3>
        </label>
        <input
          id="text"
          className="shadow border rounded w-full p-6"
          type="text"
          name="text"
          value={aboutName}
          onChange={(e) => setAboutName(e.target.value)}
        />
      </div>
      <div className="my-4">
        <label htmlFor="content">
          <h3 className="font-bold">Canvas Note</h3>
        </label>
        <textarea
          className="shadow border resize-none focus:shadow-outline w-full h-48 p-6"
          id="canvasMessage"
          name="canvasMessage"
          value={canvasMessage}
          onChange={(e) => setCanvasMessage(e.target.value)}
        />
      </div>
      <div className="flex flex-row justify-between">
        <div className="inline-flex space-x-4">
          <Button
            onClick={handleEdit}
            disabled={submitting || deleting}
            type="submit"
          >
            {submitting ? "Saving..." : "Save"}
          </Button>
          <Button className="bg-blue-400" disabled={submitting || deleting}>
            <a href="/">Cancel</a>
          </Button>
        </div>

        <Button disabled={deleting} onClick={deleteNote} className="bg-red-400">
          {deleting ? "Deleting ..." : "Delete"}
        </Button>
      </div>
    </>
  );
}

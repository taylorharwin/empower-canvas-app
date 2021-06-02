import { useState } from "react";
import Router from "next/router";

import Button from "@/components/button";

export default function CreateNote() {
  const [aboutName, setAboutName] = useState("");
  const [canvasMessage, setCanvasMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function submitHandler(e) {
    setSubmitting(true);
    e.preventDefault();
    try {
      const res = await fetch("/api/create-note", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          about_name: aboutName,
          canvas_message: canvasMessage,
        }),
      });
      setSubmitting(false);
      const json = await res.json();
      if (!res.ok) throw Error(json.message);
      Router.push("/");
    } catch (e) {
      throw Error(e.message);
    }
  }

  return (
    <form onSubmit={submitHandler}>
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
      <Button disabled={submitting} type="submit">
        {submitting ? "Creating ..." : "Create"}
      </Button>
    </form>
  );
}

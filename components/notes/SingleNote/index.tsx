import { useState } from "react";
import Link from "next/link";
import { mutate } from "swr";

import ButtonLink from "@/components/button-link";
import Button from "@/components/button";

type SingleNoteProps = {
  id: number;
  about_name: string;
  canvas_message: string;
};
export default function SingleNote({
  id,
  about_name,
  canvas_message,
}: SingleNoteProps) {
  return (
    <div className="cursor-pointer hover:bg-gray-200 w-full py-4 px-2">
      <a href={`/note/${id}`}>
        <h3 className="text-sm font-semibold text-gray-800">{about_name}</h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">
          {canvas_message}
        </p>
      </a>
    </div>
  );
}

import { useState } from "react";
import Link from "next/link";
import { mutate } from "swr";

import ButtonLink from "@/components/button-link";
import Button from "@/components/button";
import { PencilIcon } from "@heroicons/react/solid";
import { TrashIcon } from "@heroicons/react/solid";

export default function Note({ id, about_name, canvas_message }) {
  return (
    <div className="cursor-pointer hover:bg-gray-400 w-full py-4">
      <a href={`/note/${id}`}>
        <h3 className="text-sm font-semibold text-gray-800">{about_name}</h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">
          {canvas_message}
        </p>
      </a>
    </div>
  );
}

import { useState } from "react";
import Link from "next/link";
import { mutate } from "swr";

import ButtonLink from "@/components/button-link";
import Button from "@/components/button";
import { PencilIcon } from "@heroicons/react/solid";
import { TrashIcon } from "@heroicons/react/solid";

export default function Note({ id, about_name, canvas_message }) {
  return (
    <div className="relative focus-within:ring-2 focus-within:ring-indigo-500">
      <div className="flex flex-row w-full justify-between mb-4">
        <ButtonLink href={`/note/${id}`}>
          <PencilIcon className="cursor-pointer hover:text-blue-800 h-5 w-5 text-blue-500" />
        </ButtonLink>
      </div>
      <h3 className="text-sm font-semibold text-gray-800">{about_name}</h3>
      <p className="mt-1 text-sm text-gray-600 line-clamp-2">
        {canvas_message}
      </p>
    </div>
  );
}

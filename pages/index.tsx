import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import Nav from "@/components/nav";
import Container from "@/components/container";
import Notes from "@/components/notes";

import { useNotes, useSearchNotes } from "@/lib/swr-hooks";

export default function IndexPage() {
  const [search, setSearch] = useState("");
  const { notes, isLoading } = useNotes();

  const { notes: searchNotes, isLoading: searchNotesLoading } = useSearchNotes(
    search
  );

  console.log(searchNotes);

  if (isLoading) {
    return (
      <div>
        <Nav />
        <Container>
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
          <div className="my-4" />
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
          <div className="my-4" />
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
        </Container>
      </div>
    );
  }

  return (
    <div>
      <Nav />
      <Container>
        <div className="my-4">
          <label htmlFor="search">
            <h3 className="font-bold">Search By Name or Note</h3>
          </label>
          <input
            id="text"
            className="shadow border rounded w-full p-2"
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {isLoading || searchNotesLoading ? "Loading..." : null}
        {search.length >= 4 ? (
          <>
            <h5> Showing notes for `{search}` </h5>
            <Notes notes={searchNotes} />
          </>
        ) : (
          <>
            <h5> Showing most recent notes</h5>
            <Notes notes={notes} />
          </>
        )}
      </Container>
    </div>
  );
}

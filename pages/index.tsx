import { useState } from "react";
import Skeleton from "react-loading-skeleton";

import Nav from "@/components/Nav";
import Container from "@/components/Container";
import Notes from "@/components/Notes";

import { useNotes, useSearchNotes } from "@/lib/swr-hooks";

export default function IndexPage() {
  const [search, setSearch] = useState("");
  const { notes, isLoading } = useNotes();

  const { notes: searchNotes, isLoading: searchNotesLoading } = useSearchNotes(
    search
  );

  const loading = searchNotesLoading || isLoading;

  return (
    <div>
      <Nav />
      <Container>
        <div className="my-4">
          <label htmlFor="search">
            <h5 className="font-bold">Search By Name or Canvasing Note</h5>
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

        {loading && (
          <>
            <Skeleton width={180} height={24} />
            <Skeleton height={48} />
          </>
        )}

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

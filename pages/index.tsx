import Skeleton from "react-loading-skeleton";

import Nav from "@/components/nav";
import Container from "@/components/container";
import Notes from "@/components/notes";

import { useNotes } from "@/lib/swr-hooks";

export default function IndexPage() {
  const { notes, isLoading } = useNotes();

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
        <Notes notes={notes} />
      </Container>
    </div>
  );
}

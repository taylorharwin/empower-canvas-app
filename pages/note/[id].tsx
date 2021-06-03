import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";

import Container from "@/components/Container";
import EditNoteForm from "@/components/EditNoteForm";
import Nav from "@/components/Nav";

import { useNote } from "@/lib/swr-hooks";

export default function EditEntryPage() {
  const router = useRouter();
  const idFromQuery = router.query.id?.toString();
  const { data } = useNote(idFromQuery);

  return (
    <>
      <Nav title="Edit Note" />
      <Container>
        {data ? (
          <EditNoteForm
            id={data.id}
            about_name={data.about_name}
            canvas_message={data.canvas_message}
          />
        ) : (
          <>
            <Skeleton width={180} height={24} />
            <Skeleton height={96} />
          </>
        )}
      </Container>
    </>
  );
}

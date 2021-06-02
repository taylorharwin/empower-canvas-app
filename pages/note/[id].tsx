import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";

import { useNote } from "@/lib/swr-hooks";
import Container from "@/components/container";
import EditNoteForm from "@/components/edit-note";

import Nav from "@/components/nav";

export default function EditEntryPage() {
  const router = useRouter();
  const idFromQuery = router.query.id?.toString();
  const { data } = useNote(idFromQuery);

  if (!data) {
    return (
      <>
        <Nav title="Edit" />
        <Container>
          <Skeleton width={180} height={24} />
          <Skeleton height={96} />
        </Container>
      </>
    );
  }

  const { id, about_name, canvas_message } = data;
  console.log(canvas_message);
  return (
    <>
      <Nav title="Edit" />
      <Container>
        <EditNoteForm
          id={id}
          about_name={about_name}
          canvas_message={canvas_message}
        />
      </Container>
    </>
  );
}

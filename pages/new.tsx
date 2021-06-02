import Nav from "@/components/nav";
import Container from "@/components/container";
import NoteForm from "@/components/note-form";

export default function NewEntryPage() {
  return (
    <>
      <Nav title="New" />
      <Container className="w-full lg:w-2/4">
        <NoteForm />
      </Container>
    </>
  );
}

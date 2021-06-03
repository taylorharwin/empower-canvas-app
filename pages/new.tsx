import Nav from "@/components/Nav";
import Container from "@/components/Container";
import CreateNoteForm from "@/components/CreateNoteForm";

export default function NewEntryPage() {
  return (
    <>
      <Nav title="New" />
      <Container className="w-full lg:w-2/4">
        <CreateNoteForm />
      </Container>
    </>
  );
}

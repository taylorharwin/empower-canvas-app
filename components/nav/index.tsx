import Link from "next/link";
import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";

export default function Nav({ title = "Canvas Notes" }) {
  return (
    <Container className="py-4">
      <nav>
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="font-bold text-3xl">{title}</a>
          </Link>
          <ButtonLink href="/new">New Note</ButtonLink>
        </div>
      </nav>
    </Container>
  );
}

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Newspaper } from "lucide-react";

export default function Page() {
  return (
    <Container>
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Newspaper />
          </EmptyMedia>
          <EmptyTitle>No articles</EmptyTitle>
          <EmptyDescription>No articles found</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>Add articles</Button>
        </EmptyContent>
      </Empty>
    </Container>
  );
}

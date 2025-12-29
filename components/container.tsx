import { cn } from "@/lib/utils";

export function RootContainer({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="root-container"
      className={cn(
        "bg-background w-full mx-auto min-h-screen max-w-4xl min-w-0 items-start 2xl:max-w-6xl border-l border-r",
        className,
      )}
      {...props}
    />
  );
}

export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="container"
      className={cn("mx-auto w-full min-w-0 items-start", className)}
      {...props}
    />
  );
}

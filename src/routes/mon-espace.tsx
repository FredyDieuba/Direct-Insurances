import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/mon-espace")({
  beforeLoad: () => { throw redirect({ to: "/espace-client" }); },
  component: () => null,
});

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/android")({
  component: Android,
});

function Android() {
  return <div className="flex items-center pb-3 gap-x-6 px-8 ">Android</div>;
}

import { HydrateClient, trpc } from "@/trpc/server";
import { PageClient } from "./client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default async function Home() {
  void trpc.hello.prefetch({ text: "Hernan" });

  return (
    <HydrateClient>
      <Suspense fallback="loading...">
        <ErrorBoundary fallback="error...">
          <PageClient />
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
}

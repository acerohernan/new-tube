"use client";

import React from "react";
import { trpc } from "@/trpc/client";

export const PageClient = (): React.ReactElement => {
  const [data] = trpc.hello.useSuspenseQuery({ text: "Hernan" });

  return <div>Page client says: {data.greeting}</div>;
};

"use client";

import { PropsWithChildren } from "react";
import { SchemaProvider } from "./SchemaContext";

export function ClientProviders({ children }: PropsWithChildren) {
  return <SchemaProvider>{children}</SchemaProvider>;
}

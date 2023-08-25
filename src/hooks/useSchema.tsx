import { SchemaContext } from "@/contexts/SchemaContext";
import { useContext } from "react";

export function useSchema() {
  const context = useContext(SchemaContext);

  if (!context) {
    throw new Error("useSchema must be used within a SchemaProvider");
  }

  return context;
}

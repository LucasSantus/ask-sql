import { initialSchema } from "@/constants/globals";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface Schema {
  schema: string;
  setSchema: Dispatch<SetStateAction<string>>;
}

export const SchemaContext = createContext<Schema>({} as Schema);

export function SchemaProvider({ children }: PropsWithChildren) {
  const [schema, setSchema] = useState(initialSchema);

  return (
    <SchemaContext.Provider value={{ schema, setSchema }}>
      {children}
    </SchemaContext.Provider>
  );
}

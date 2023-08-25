"use client";

import { initialSchema } from "@/constants/globals";
import { useSchema } from "@/hooks/useSchema";
import { Trash } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import logo from "./../assets/logo.svg";

interface HeaderProps {
  setInput: Dispatch<SetStateAction<string>>;
  setCompletion: (completion: string) => void;
}

export function Header({ setInput, setCompletion }: HeaderProps) {
  const { setSchema } = useSchema();

  return (
    <header className="flex w-full justify-between">
      <Image src={logo} width="118" height="27" alt="Logo do Projeto Ask Sql" />

      <button type="button">
        <Trash
          className="h-8 w-8 text-white"
          strokeWidth={0.8}
          onClick={() => {
            setSchema(initialSchema);
            setCompletion("");
            setInput("");
          }}
        />
      </button>
    </header>
  );
}

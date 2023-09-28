"use client";

import { initialSchema } from "@/constants/globals";
import { Trash } from "lucide-react";
import Image from "next/image";
import { Dispatch, Fragment, SetStateAction } from "react";
import logo from "./../assets/logo.svg";

interface HeaderProps {
  setInput: Dispatch<SetStateAction<string>>;
  setCompletion: (completion: string) => void;
  setSchema: Dispatch<SetStateAction<string>>;
}

export function Header({ setInput, setCompletion, setSchema }: HeaderProps) {
  return (
    <Fragment>
      <div>
        <Image
          src={logo}
          width="118"
          height="27"
          alt="Logo do Projeto Ask Sql"
        />
      </div>
      <div>
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
      </div>
    </Fragment>
  );
}

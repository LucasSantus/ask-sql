"use client";

import { useCompletion } from "ai/react";
import { Stars, Trash } from "lucide-react";
import { highlight, languages } from "prismjs";
import { useState } from "react";
import Editor from "react-simple-code-editor";

import Image from "next/image";
import "prismjs/components/prism-sql";
import "prismjs/themes/prism-dark.css";

import logo from "./../assets/logo.svg";

export const initialSchema = `create table if not exists users (
  id uuid primary key not null default gen_random_uuid(),
  "name" text not null,
  handle text not null,
  created_at timestamp not null default now(),
  updated_at timestamp not null default now()
);`;

export default function Home() {
  const [schema, setSchema] = useState(initialSchema);

  const { handleSubmit, completion, input, handleInputChange } = useCompletion({
    api: "/api/generate-sql",
    body: {
      schema,
    },
  });

  const result = completion;

  return (
    <div className="mx-auto max-w-[430px] px-4 pb-4 pt-12">
      <header className="flex items-center justify-between">
        <Image src={logo} alt="Logo do Projeto Ask Sql" />

        <button type="button">
          <Trash
            className="h-8 w-8 text-white"
            strokeWidth={0.8}
            onClick={() => {
              setSchema(initialSchema);
            }}
          />
        </button>
      </header>

      <form
        className="flex w-full flex-col py-8 text-custom-foam"
        onSubmit={handleSubmit}
      >
        <label className="text-lg font-light" htmlFor="schema">
          Cole seu código sql aqui:
        </label>

        <Editor
          textareaId="schema"
          value={schema}
          onValueChange={(code) => setSchema(code)}
          highlight={(code) => highlight(code, languages.sql, "sql")}
          className="my-4 rounded-md border border-custom-blue-berry-300 bg-custom-blue-berry-600 font-mono focus-within:ring-2 focus-within:ring-custom-lime-500"
          padding={16}
          textareaClassName="outline-none"
        />

        <label className="text-lg font-light" htmlFor="question">
          Faça uma pergunta sobre o código:
        </label>

        <textarea
          className="my-4 rounded-md border border-custom-blue-berry-300 bg-custom-blue-berry-600 px-4 py-3 outline-none focus:ring-2 focus:ring-custom-lime-500"
          name="question"
          id="question"
          value={input}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="flex h-14 items-center justify-center gap-2 rounded-lg border border-custom-pistachio text-custom-pistachio"
        >
          <Stars />
          Perguntar á inteligência artificial
        </button>
      </form>

      <div className="mt-6 text-white">
        <label className="text-foam text-lg font-light" htmlFor="question">
          Resposta:
        </label>

        <Editor
          textareaId="schema"
          readOnly
          value={result}
          onValueChange={() => {}}
          highlight={(code) => highlight(code, languages.sql, "sql")}
          className="my-4 rounded-md border border-custom-blue-berry-300 bg-custom-blue-berry-600 font-mono"
          padding={16}
          textareaClassName="outline-none"
        />
      </div>
    </div>
  );
}

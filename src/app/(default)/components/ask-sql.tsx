"use client";

import { initialSchema } from "@/constants/globals";

import { useCompletion } from "ai/react";
import { Stars } from "lucide-react";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-sql";
import "prismjs/themes/prism-dark.css";
import { useState } from "react";
import Editor from "react-simple-code-editor";

interface AskSqlProps {}

export function AskSql({}: AskSqlProps) {
  const [schema, setSchema] = useState(initialSchema);

  const {
    handleSubmit,
    completion,
    input,
    handleInputChange,
    setInput,
    setCompletion,
  } = useCompletion({
    api: "/api/generate-sql",
    body: {
      schema,
    },
  });

  const result = completion;

  return (
    <div>
      <div className="flex justify-between">
        <Header
          setInput={setInput}
          setCompletion={setCompletion}
          setSchema={setSchema}
        />
      </div>

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

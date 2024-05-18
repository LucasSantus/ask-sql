"use client";

import { Framing } from "@/components/framing";
import { initialSchema } from "@/constants/globals";
import { Header } from "@/layout/header";
import { bounceAnimationHorizontalDislocate } from "@/utils/animation/bounceAnimationHorizontalDislocate";
import { useCompletion } from "ai/react";
import { Loader2Icon, StarsIcon } from "lucide-react";
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
    isLoading,
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
      <Framing
        {...bounceAnimationHorizontalDislocate({ delay: 0.3 })}
        className="flex justify-between"
      >
        <Header
          setInput={setInput}
          setCompletion={setCompletion}
          setSchema={setSchema}
        />
      </Framing>

      <form
        className="flex w-full flex-col py-8 text-custom-foam"
        onSubmit={handleSubmit}
      >
        <Framing {...bounceAnimationHorizontalDislocate({ delay: 0.5 })}>
          <label className="text-lg font-light" htmlFor="schema">
            Cole seu código sql aqui:
          </label>
        </Framing>

        <Framing {...bounceAnimationHorizontalDislocate({ delay: 0.7 })}>
          <Editor
            textareaId="schema"
            value={schema}
            onValueChange={(code) => setSchema(code)}
            highlight={(code) => highlight(code, languages.sql, "sql")}
            className="my-4 rounded-md border border-custom-blue-berry-300 bg-custom-blue-berry-600 font-mono focus-within:ring-2 focus-within:ring-custom-lime-500"
            padding={16}
            textareaClassName="outline-none"
          />
        </Framing>

        <Framing {...bounceAnimationHorizontalDislocate({ delay: 0.9 })}>
          <label className="text-lg font-light" htmlFor="question">
            Faça uma pergunta sobre o código:
          </label>
        </Framing>

        <Framing {...bounceAnimationHorizontalDislocate({ delay: 1.1 })}>
          <textarea
            className="my-4 h-full w-full rounded-md border border-custom-blue-berry-300 bg-custom-blue-berry-600 px-4 py-3 outline-none focus:ring-2 focus:ring-custom-lime-500"
            name="question"
            id="question"
            value={input}
            onChange={handleInputChange}
          />
        </Framing>

        <Framing {...bounceAnimationHorizontalDislocate({ delay: 1.3 })}>
          <button
            type="submit"
            className="flex h-14 w-full items-center justify-center gap-2 rounded-lg border border-custom-pistachio text-custom-pistachio hover:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2Icon className="animate-spin" />
            ) : (
              <StarsIcon />
            )}
            Perguntar á inteligência artificial
          </button>
        </Framing>
      </form>

      <Framing
        {...bounceAnimationHorizontalDislocate({ delay: 1.5 })}
        className="mt-6 text-white"
      >
        <label className="text-foam text-lg font-light" htmlFor="question">
          Resposta:
        </label>
      </Framing>

      <Framing
        {...bounceAnimationHorizontalDislocate({ delay: 1.7 })}
        className="mt-6 text-white"
      >
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
      </Framing>
    </div>
  );
}

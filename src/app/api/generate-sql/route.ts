import { OpenAIStream, StreamingTextResponse } from "ai";
// app/api/chat/route.ts

import OpenAI from "openai";

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { schema, question } = await req.json();

  const prompt = `
    O seu trabalho é criar queries em SQL a partir de um schema SQL abaixo.

    Schema SQL: 

    """
    ${schema}
    """

    A partir do schema acima, escreva uma query SQL a partir da solicitação abaixo:

    Solicitação: 

    ${question}
  `;

  const response = await openai.chat.completions.create({
    model: "text-davinci-003",
    stream: true,
    temperature: 0.6,
    max_tokens: 300,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],

    // model: "gpt-3.5-turbo",
    // stream: true,
    // messages: [
    //   {
    //     role: "user",
    //     content: prompt,
    //   },
    // ],
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}

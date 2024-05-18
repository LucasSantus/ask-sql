import {
  defaultSafetySettings,
  mapSafetySettings,
} from "@/constants/safety-settings-mapper";
import { gemini } from "@/lib/gemini";
import { sqlFormSchema } from "@/validation/sql";
import { GoogleGenerativeAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

export async function POST(request: Request) {
  const parseResult = sqlFormSchema.safeParse(await request.json());

  if (!parseResult.success) {
    return new Response(JSON.stringify({ error: "Invalid request data" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const { schema, prompt } = parseResult.data;

  const message = `
    O seu trabalho é criar queries em SQL a partir do schema SQL disponibilizado abaixo.

    Schema SQL: 

    ${schema}

    A partir do schema disponibilizado, escreva uma query SQL apartir da solicitação abaixo:

    Solicitação:

    ${prompt}

    Observação, É extremamente importante que retorne somente a resposta em sql sem caracteres especiais, nada além disso.
  `;

  const mappedSafetySettings = mapSafetySettings(defaultSafetySettings);

  const geminiStream = await gemini
    .getGenerativeModel({
      model: "gemini-pro",
      safetySettings: mappedSafetySettings,
      generationConfig: {
        maxOutputTokens: 2000,
        temperature: 0.7,
      },
    })
    .generateContentStream([message]);

  const stream = GoogleGenerativeAIStream(geminiStream);

  return new StreamingTextResponse(stream);
}

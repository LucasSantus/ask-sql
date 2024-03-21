import { z } from "zod";

export const sqlFormSchema = z
  .object({
    schema: z.string({
      required_error: "Insira o texto para tradução!",
    }),
    prompt: z
      .string({
        required_error: "Insira o texto para tradução!",
      })
      .min(1, "Insira o texto para tradução!"),
  })

export type SqlFormData = z.infer<typeof sqlFormSchema>;
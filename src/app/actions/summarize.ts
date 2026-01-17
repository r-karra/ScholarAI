"use server";

import { summarizeResearchPaper } from "@/ai/flows/summarize-research-paper";
import { z } from "zod";

const schema = z.object({
  paperText: z.string().min(100, { message: "Paper text must be at least 100 characters long." }),
});

export type FormState = {
  message: string;
  summary?: string;
  fields?: Record<string, string>;
  issues?: string[];
};

export async function onSummarize(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = schema.safeParse(formData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }
    return {
      message: "Invalid form data",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  try {
    const { summary } = await summarizeResearchPaper({
      paperText: parsed.data.paperText,
    });
    return { message: "Paper summarized successfully.", summary };
  } catch (e) {
    return {
      message: "An error occurred during summarization. Please try again.",
    };
  }
}

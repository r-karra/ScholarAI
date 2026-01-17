"use client";

import { useFormStatus } from "react-dom";
import { onSummarize, type FormState } from "@/app/actions/summarize";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Sparkles } from "lucide-react";
import { useActionState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Summarizing...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Generate Summary
        </>
      )}
    </Button>
  );
}

export function SummarizeForm() {
  const initialState: FormState = { message: "" };
  const [state, formAction] = useActionState(onSummarize, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && !state.summary && !state.issues) {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
    if (state.summary) {
      formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <div className="space-y-6">
      <form ref={formRef} action={formAction} className="space-y-4">
        <Textarea
          name="paperText"
          placeholder="Paste the text of a research paper here..."
          rows={15}
          required
          minLength={100}
          className="bg-white"
        />
        {state.issues && (
          <div className="text-destructive text-sm">
            {state.issues.map((issue) => (
              <p key={issue}>{issue}</p>
            ))}
          </div>
        )}
        <div className="flex justify-end">
          <SubmitButton />
        </div>
      </form>
      {state.summary && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2">
              <Sparkles className="text-accent-foreground" />
              AI Summary
            </CardTitle>
            <CardDescription>
              Here is the AI-generated summary of the provided text.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap">{state.summary}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GanttChart } from "lucide-react";

export default function BenchmarksPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline font-bold tracking-tight">
          Benchmarks
        </h1>
        <p className="text-muted-foreground">
          View standardized performance metrics for models and tasks.
        </p>
      </div>
      <Card className="flex flex-col items-center justify-center text-center p-12">
        <CardHeader>
          <div className="mx-auto bg-muted p-4 rounded-full">
            <GanttChart className="h-12 w-12 text-muted-foreground" />
          </div>
          <CardTitle className="mt-4">Benchmarks Page Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">This section is under construction.</p>
        </CardContent>
      </Card>
    </div>
  );
}

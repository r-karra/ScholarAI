import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SummarizeForm } from "@/components/summarize-form";

export default function LearnPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline font-bold tracking-tight">
          Learn & Research
        </h1>
        <p className="text-muted-foreground">
          Explore learning materials and research resources.
        </p>
      </div>

      <Tabs defaultValue="paper" className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-7">
          <TabsTrigger value="math">Math Concept</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
          <TabsTrigger value="paper">Paper</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="contribute">Contribute</TabsTrigger>
          <TabsTrigger value="research">Research</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
        </TabsList>

        <TabsContent value="paper" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Research Paper Summarizer</CardTitle>
              <p className="text-muted-foreground">
                Use our AI tool to generate a concise summary of any research paper.
              </p>
            </CardHeader>
            <CardContent>
              <SummarizeForm />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Placeholder content for other tabs */}
        <TabsContent value="math">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Math Concepts</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Content on core mathematical principles coming soon.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notes">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Study Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Study notes, summaries, and key takeaways coming soon.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="code">
           <Card>
            <CardHeader>
              <CardTitle className="font-headline">Code Implementations</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Associated code implementations (e.g., GitHub links, Notebooks) coming soon.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="contribute">
           <Card>
            <CardHeader>
              <CardTitle className="font-headline">Contribute to Open Source</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Guidance and links for contributing to open-source projects coming soon.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="research">
           <Card>
            <CardHeader>
              <CardTitle className="font-headline">Research Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Summaries of current research trends and topics coming soon.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="applications">
           <Card>
            <CardHeader>
              <CardTitle className="font-headline">Real-world Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Real-world use cases and deployment examples coming soon.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

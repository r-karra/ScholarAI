import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const recentActivity = [
  {
    id: 1,
    title: "Fine-tuning Llama 3 for text summarization",
    type: "Notebook",
    time: "2 hours ago",
    image: PlaceHolderImages.find((img) => img.id === "recent-activity-1"),
  },
  {
    id: 2,
    title: "Exploring the new sentiment analysis dataset",
    type: "Dataset",
    time: "1 day ago",
    image: PlaceHolderImages.find((img) => img.id === "recent-activity-2"),
  },
];

const suggestedContent = [
  {
    id: 1,
    title: "Getting Started with Transformers",
    description: "A comprehensive guide to understanding and using transformer models.",
    image: PlaceHolderImages.find((img) => img.id === "suggestion-1"),
  },
  {
    id: 2,
    title: "Join the 'Image Classification Challenge'",
    description: "Compete with others to build the best image classification model.",
    image: PlaceHolderImages.find((img) => img.id === "suggestion-2"),
  },
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline font-bold tracking-tight">
          Home
        </h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's new for you.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-headline font-semibold mb-4">
          Recent Activity
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {recentActivity.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              {item.image && (
                <Image
                  src={item.image.imageUrl}
                  alt={item.image.description}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={item.image.imageHint}
                />
              )}
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <Badge variant="outline">{item.type}</Badge>
                <p className="text-sm text-muted-foreground">{item.time}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-headline font-semibold mb-4">
          Suggested For You
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {suggestedContent.map((item) => (
            <Card key={item.id} className="flex items-center p-4 gap-4">
              {item.image && (
                <Image
                  src={item.image.imageUrl}
                  alt={item.image.description}
                  width={150}
                  height={150}
                  className="w-24 h-24 object-cover rounded-md"
                   data-ai-hint={item.image.imageHint}
                />
              )}
              <div className="flex-1">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
